from dataclasses import dataclass
from enum import Enum
from typing import Optional

from core.common.drivers import DriverConfig

class ScheduleType(Enum):
	INTERVAL = 'interval'

@dataclass
class Schedule:
	minutes: int = 720
	type: ScheduleType = ScheduleType.INTERVAL

@dataclass
class MonitorConfiguration:
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
	# workspace: str
	configuration: MonitorConfiguration # TODO (This is NOT a connection configuration, it is the details for the individ monitor)
	source: str = 'default' # Used (with workspace) to resolve the DriverConfig
	# schedule: Schedule

	@classmethod
	def validate(cls, monitor_dict):
		pass

	def to_dict(self):
		return {
			"name": self.name,
			"source": self.source,
		}

	@classmethod
	def from_dict(cls, monitor_dict):
		return cls(
			**monitor_dict
		)

	def to_monitor(self, workspace):
		return Monitor.from_definition(self, workspace)

@dataclass
class Monitor:
	name: str
	description: Optional[str]
	enabled: bool
	driver_config: DriverConfig
	# type via polymorphism

	def run(self):
		from core.monitor.tasks.run import RunMonitorTask

		return RunMonitorTask(self).run()

	@classmethod
	def from_definition(cls, definition: MonitorDefinition, workspace):
		# MonitorDefinition.validate(definition) # TOOD:  validate the definition
		driver_config = workspace.get_driver_config(definition.source)
		
		return cls(
			name=definition.name,
			description=definition.description,
			enabled=definition.enabled,
			driver_config=driver_config,
		)

	def retrieve_metrics(self):
		raise NotImplementedError

