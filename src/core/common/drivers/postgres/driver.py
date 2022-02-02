from typing import Type

from core.common.drivers.base import BaseDialect, BaseSqlAlchemyDriver

from .configuration import PostgresDriverConfiguration
from .dialect import PostgresDialect


class PostgresDriver(BaseSqlAlchemyDriver):
    configuration: PostgresDriverConfiguration
    dialect: Type[BaseDialect] = PostgresDialect
