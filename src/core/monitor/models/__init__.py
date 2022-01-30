from dataclasses import dataclass
from typing import Optional, Type
import json

def load_monitor_cls(monitor_dict):
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

def load_monitor_definition(monitor_definition):
    monitor_type = monitor_definition['type']
    # monitor_type = MonitorType(type_raw)

    configuration = json.loads(monitor_definition['configuration'])
    if monitor_type == "table":
        from .table import TableMonitor, TableMonitorDefinition
        # TableMonitorDefinition.validate()
        return TableMonitorDefinition(
            **monitor_definition,
            **configuration,
        )
    # elif monitor_type == MonitorType.CUSTOM:
    #     return CustomMonitor
    # elif monitor_type == MonitorType.SCHEMA:
    #     return SchemaMonitor

    # Note: Unreachable - we would error at MonitorType instantiation
    raise Exception("Could not find a monitor definition with type: {}".format(monitor_type))


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
    type: str
    # workspace: str
    configuration: str # TODO (This is NOT a connection configuration, it is the details for the individ monitor)
    datasource: str = 'default' # Used (with workspace) to resolve the DriverConfig
    # schedule: Schedule

    @classmethod
    def validate(cls, monitor_dict):
        pass

    def to_dict(self):
        return {
            "name": self.name,
            "description": self.description,
            "enabled": self.enabled,
            "type": self.type,
            "datasource": self.datasource,
            "configuration": self.configuration,
        }

    @classmethod
    def from_dict(cls, monitor_dict):
        return cls(
            **monitor_dict
        )

    def to_monitor(self, workspace): # TODO: THIS IS THE MAIN PROBLEM
        monitor_cls = load_monitor_definition(self.to_dict())
        return monitor_cls.to_monitor(workspace)
