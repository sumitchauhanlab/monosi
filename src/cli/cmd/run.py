from .base import ProjectTask, TaskBase

class PrintMonitorDefinitionTask(TaskBase):
    def __init__(self, args, config, monitor):
        super().__init__(args, config)
        self.monitor = monitor

    def run(self, *args, **kwargs):
        print(self.monitor.to_dict())

class MonitorsTask(ProjectTask):        
    def _create_tasks(self):
        tasks = []
        for monitor in self.project.monitors:
            task = PrintMonitorDefinitionTask(
                args=self.args,
                config=self.config,
                monitor=monitor,
            )
            tasks.append(task)

        return tasks

    def _process_tasks(self):
        results = [task.run() for task in self.task_queue]

        return results
