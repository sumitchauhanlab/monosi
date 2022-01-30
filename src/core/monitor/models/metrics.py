import abc
from dataclasses import dataclass
from enum import Enum

from core.common.drivers.dialect import Dialect

class MetricType(Enum):
    CUSTOM = 'custom'

@dataclass
class MetricBase:
    type: MetricType

    def alias(self):
        return self.type._value_

    @abc.abstractmethod
    def compile(self, dialect: Dialect):
        raise NotImplementedError

