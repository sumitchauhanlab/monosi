from core.monitor.models.base import Monitor

from .base import BaseCmd

class RunCmd(BaseCmd):
    def _create_tasks(self):
        return [definition.to_monitor(self.project.configuration) for definition in self.project.monitors]

    def _process_tasks(self):
        results = [task.run() for task in self.task_queue]

        return results
