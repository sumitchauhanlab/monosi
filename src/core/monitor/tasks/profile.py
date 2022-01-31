from core.common.drivers.column import Column
from core.common.drivers.factory import load_driver

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
                    table=table.name,
                    timestamp_field=table.timestamp().name,
                )
                definitions.append(table_monitor_def)
            except:
                pass

        return definitions

    def run(self):
        return self._create_definitions()