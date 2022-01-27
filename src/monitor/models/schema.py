from dataclasses import dataclass
from typing import List, Optional

from .base import MonitorDefinition

class SchemaMonitorDefinition(MonitorDefinition):
	table: str
	columns: Optional[List[str]]
