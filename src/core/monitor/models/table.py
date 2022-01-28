from dataclasses import dataclass
from typing import Optional

from .base import MonitorDefinition, MonitorConfiguration

@dataclass
class TableMonitorConfiguration(MonitorConfiguration):
	table: str
	timestamp_field: str
	where: Optional[str]
	days_ago: Optional[int]

@dataclass
class TableMonitorDefinition(TableMonitorConfiguration, MonitorDefinition):
	pass
