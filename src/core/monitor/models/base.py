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
	def from_definition(cls, definition, workspace):
		# MonitorDefinition.validate(definition) # TOOD:  validate the definition
		driver_config = workspace.get_driver_config(definition.datasource)

		return cls(
			name=definition.name,
			description=definition.description,
			enabled=definition.enabled,
			driver_config=driver_config,
		)

	def retrieve_metrics(self):
		raise NotImplementedError

