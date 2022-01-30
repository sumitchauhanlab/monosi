# from core.monitor import Compiler, Runner, Analyzer

class RunMonitorTask:
    def __init__(self, monitor):
        self.monitor = monitor

    def run(self):
        print("It ran!")

    # def _compile(self):
    #     compiler = Compiler(self.monitor) # TODO: Update
    #     return compiler.compile(self.monitor)

    # def _run(self):
    #     runner = Runner(self.monitor) # TODO: Update
    #     return runner.run(self.monitor)

    # def _analyze(self, results):
    #     analyzer = Analyzer(self.monitor)
    #     return analyzer.analyze(self.monitor, results)

    # def run(self):
    #     compiled_sql = self._compile()
    #     runner_results = self._run()
    #     analysis = self._analyze(runner_results)

    #     return (runner_results, analysis)

# class RunAllMonitorsTask:
#     def __init__(self, monitors):
#         self.monitors = monitors

#     def _create_tasks(self):
#         return self.monitors

#     @staticmethod
#     def _process_tasks(tasks):
#         tasks = self._create_tasks()
#         return [task.run() for task in tasks]
    
#     def run(self):
#         return self._process_tasks()
