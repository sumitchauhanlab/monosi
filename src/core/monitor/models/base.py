from dataclasses import dataclass
from enum import Enum
from typing import Optional

from core.monitor.tasks.run import RunMonitorTask

class ScheduleType(Enum):
	INTERVAL = 'interval'

@dataclass
class Schedule:
	minutes: int = 720
	type: ScheduleType = ScheduleType.INTERVAL

@dataclass
class Configuration:
	pass

# TODO: It's likely that a monitor definition
# will have to include information about which
# datasource it is intended to run on and a
# way to grab its configuration information
@dataclass
class MonitorDefinition:
	name: str
	description: Optional[str]
	enabled: Optional[bool]
	configuration: Configuration # TODO
	# schedule: Schedule

	@classmethod
	def validate(cls, monitor_dict):
		pass

	def to_dict(self):
		return {
			"name": self.name,
		}

	@classmethod
	def from_dict(cls, monitor_dict):
		return cls(
			**monitor_dict
		)

@dataclass
class Monitor:
	name: str
	description: Optional[str]
	enabled: bool
	# configuration: DriverConfig
	# type via polymorphism

	def run(self):
		return RunMonitorTask(self).run()

	@classmethod
	def from_definition(cls, definition: MonitorDefinition):
		return cls(
			name=definition.name,
			description=definition.description,
			enabled=definition.enabled,
		)

