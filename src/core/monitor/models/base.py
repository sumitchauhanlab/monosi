from dataclasses import dataclass
from enum import Enum
from typing import Optional

import core.monitor.tasks as tasks

class ScheduleType(Enum):
	INTERVAL = 'interval'

@dataclass
class Schedule:
	minutes: int = 720
	type: ScheduleType = ScheduleType.INTERVAL

@dataclass
class Configuration:
	pass

@dataclass
class MonitorDefinition:
	name: str
	description: Optional[str]
	enabled: Optional[bool]
	configuration: Configuration
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
    def run(self):
        return tasks.RunMonitorTask(self).run()

    @classmethod
    def from_definition(cls, definition: MonitorDefinition):
    	return cls()

