from dataclasses import dataclass
from sqlalchemy import Boolean, Column, DateTime, Integer, String, Table, Text, func

from core.monitor.models.base import MonitorDefinition

from . import Base, mapper_registry
from .base import CrudMixin

# TODO: Is this necessary? Is it actually mapped?
# @mapper_registry.mapped

@dataclass
class Monitor(MonitorDefinition, Base, CrudMixin):
    # TODO: Abstract id, created_at, updated_at
    __table__ = Table(
        "monitor",
        mapper_registry.metadata,
        Column("id", Integer, primary_key=True),

        Column("name", String(50)),
        Column("description", Text),
        Column("enabled", Boolean),
        Column("configuration", Text), # TODO: Better way to not store JSON-style configuration?
        # Column('workspace', String), # TODO: Namespace by workspace
        Column('source', String, ForeignKey('datasource.name')),
        # Column("schedule", Text), # TODO: Figure out nested dataclass

        # TODO: Add updated_on fn
        Column("updated_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
        Column("created_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
    )
    # TODO: https://stackoverflow.com/questions/61108811/sqlalchemy-relationship-with-foreignkey-consisting-of-two-columns

    # source = relationship() # TOOD: Declare
    # workspace = relationship()

    def run(self):
        monitor = monitor.Monitor.from_definition(self, self.workspace)
        monitor.run()



# TODO: Polymorphic association
    # __mapper_args__ = {
    #     'polymorphic_identity':'monitor',
    #     'polymorphic_on':monitor_type,
    #     'with_polymorphic': '*'
    # }
