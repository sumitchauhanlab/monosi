from dataclasses import dataclass
from typing import Any, List


from common.configuration import Configuration

from monitor.models.base import Monitor, MetricBase
from monitor.models.table import TableMonitor, ColumnMetric, ColumnMetricType
from monitor.models.custom import CustomMetric

from common.drivers.column import Table
from common.drivers.dialect import Dialect


@dataclass
class Compiler:
    dialect: Dialect
    metadata: Any

    def __init__(self, config):
    	self.metadata = config.metadata
    	self.dialect = config.dialect

    def compile_metric(self, metric: MetricBase):
        return metric.compile(self.dialect)

    def compile_select(self, metrics: List[MetricBase]):
        select_body = []
        for metric in metrics:
            metric_sql = self.compile_metric(metric)
            select_body.append(metric_sql)

        return ",\n\t".join(select_body)

    def _add_cols(self, monitor: TableMonitor):
        tables = Table.from_metadata(self.metadata)
        for table in tables:
            if table.name.lower() in monitor.table:
                monitor.columns = table.columns

    def compile(self, monitor: Monitor):
        if isinstance(monitor, TableMonitor):
            self._add_cols(monitor)

        select_sql = self.compile_select(monitor.retrieve_metrics())
        sql = monitor.base_sql_statement(select_sql)
        
        return sql

