from core.monitor.models.base import Monitor

from .base import BaseCmd


BOOTSTRAPPED_MONITOR_PATH = './bootstrapped-monitors'

def _write_definition(self, definition, monitors_dir=BOOTSTRAPPED_MONITOR_PATH):
    database = definition['monosi']['monitors'][0]['table'].split('.')[0]
    schema = definition['monosi']['monitors'][0]['table'].split('.')[1]
    table = definition['monosi']['monitors'][0]['table'].split('.')[2]

    monitor_path = os.path.join(monitors_dir, database, schema)
    if not os.path.exists(monitor_path):
        os.makedirs(monitor_path)

    path = os.path.join(monitor_path, table + '.yml')
    if not os.path.exists(path):
        yaml.write_file(path, definition)

def _persist_definitions(self, definitions):
    if not os.path.exists(BOOTSTRAPPED_MONITOR_PATH):
        os.makedirs(BOOTSTRAPPED_MONITOR_PATH)
    self.config.add_monitor_path(BOOTSTRAPPED_MONITOR_PATH)

    for definition in definitions:
        self._write_definition(definition)

class ProfileCmd(BaseCmd):
    def _create_tasks(self):
        # for source in current workspace
        #   create profile task
        return [definition.to_monitor(self.project.configuration) for definition in self.project.monitors]

    def _process_tasks(self):
        results = [task.run() for task in self.task_queue]
        # for results of each task
        #   persist the definitions to file

        return results
