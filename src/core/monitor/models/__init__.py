from typing import Type

from .base import Monitor
from .table import TableMonitor

def load_monitor_cls(monitor_dict) -> Type[Monitor]:
    monitor_type = monitor_dict.get('type')
    # monitor_type = MonitorType(type_raw)

    if monitor_type == "table":
        return TableMonitor
    # elif monitor_type == MonitorType.CUSTOM:
    #     return CustomMonitor
    # elif monitor_type == MonitorType.SCHEMA:
    #     return SchemaMonitor

    # Note: Unreachable - we would error at MonitorType instantiation
    raise Exception("Could not find a moniotr with type: {}".format(type_raw))
