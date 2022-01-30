# from dataclasses import dataclass
# from enum import Enum

# from .base import MonitorDefinition

# class Operator(Enum):
#     EQ = 'eq'
#     NE = 'ne'
#     GT = 'gt'
#     GE = 'ge'
#     LT = 'lt'
#     LE = 'le'
#     ABS_INC = 'abs_inc'
#     ABS_dec = 'abs_dec'
#     REL_INC = 'rel_inc'
#     REL_dec = 'rel_dec'

# class ThresholdDefinition:
# 	operator: Operator
# 	value: float

# class CustomMonitorDefinition(MonitorDefinition):
# 	sql: str
# 	thresholds: List[ThresholdDefinition]