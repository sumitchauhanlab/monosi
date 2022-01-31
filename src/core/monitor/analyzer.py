class Analyzer:
	pass

# from dataclasses import dataclass
# import logging
# from typing import Any, Dict, List
# from monosi.drivers.column import Table

# from monosi.monitors.types.custom import CustomMetric
# from monosi.monitors.types.schema import SchemaMetric
# from monosi.monitors.types.table import ColumnMetric

# from .data import Data
# from .schema import SchemaComparisonTest
# from .threshold import ThresholdTest
# from .zscore import ZScoreTest


# class Analyzer(object):
#     def _create_test(self, metric, data: Data):
#         if isinstance(metric, ColumnMetric):
#             return ZScoreTest.from_metric(metric, data)
#         elif isinstance(metric, CustomMetric):
#             return ThresholdTest.from_metric(metric, data)
#         elif isinstance(metric, SchemaMetric):
#             return SchemaComparisonTest.from_metric(metric, data)
#         else:
#             logging.warning("Data returned from the database did not contain data for a metric defined in the monitor.")
#             raise Exception("Could not create test because the monitor was not recognized.")

#     def test(self, metric, data):
#         test = self._create_test(metric, data)
        
#         try:
#             # self.reporter.test_started(self)
#             result = test.run()
#             # if not len(result.anomalies) > 0:
#             #     self.reporter.test_passed(test)
#             # else:
#             #     self.reporter.test_failed(test)
#         finally:
#         	pass
#             # self.reporter.test_finished(test)
        
#         return result

#     def analyze(self, monitor, results):
#         data = Data.from_results(results)
#         results = {}

#         for metric in monitor.retrieve_metrics():
#             result = self.test(metric, data)
#             results[metric.alias()] = result

#         return results
