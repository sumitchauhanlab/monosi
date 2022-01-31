from core.common.drivers.column import Column, Table
from core.common.drivers.factory import load_driver

from core.monitor.models.table import TableMonitorDefinition

class ProfileTask:
    def __init__(self, driver_config):
        self.driver_config = driver_config

    def _retrieve_tables(self):
        driver_cls = load_driver(self.driver_config)
        driver = driver_cls(self.driver_config)
        metadata = driver.metadata()

        return Table.from_metadata(metadata)

    def _create_definitions(self):
        definitions = []

        tables = self._retrieve_tables()
        for table in tables:
            try:
                table_monitor_def = TableMonitorDefinition(
                    name="{} - Table Health".format(table.name),
                    type="table",
                    configuration='{"table": "' + table.name + '", "timestamp_field": "' + table.timestamp().name + '"}',
                    table=table.name,
                    timestamp_field=table.timestamp().name,
                )
                definitions.append(table_monitor_def)
            except Exception as e:
                pass
                
        return definitions

    def run(self):
        return self._create_definitions()