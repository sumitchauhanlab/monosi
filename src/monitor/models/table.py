from dataclasses import dataclass
from typing import Optional

from .base import MonitorDefinition

@dataclass
class TableMonitorDefinition(MonitorDefinition):
	table: str
	timestamp_field: str
	where: Optional[str]
	days_ago: Optional[int]
