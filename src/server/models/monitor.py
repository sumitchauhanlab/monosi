from dataclasses import dataclass
from typing import Any, Dict
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Table, Text, func
import json

from core.common.drivers import DriverConfig
from core.monitor.models import MonitorDefinition

from . import Base, mapper_registry
from .base import CrudMixin
from .datasource import Datasource


@dataclass
class Workspace:
    datasources: Dict[str, DriverConfig]
    name: str = "default"

    @classmethod
    def from_datasource_definitions(cls, datasource_definitions):
        datasources = {}
        for definition in datasource_definitions:
            datasource = cls._config_from_definition(definition)
            datasources[definition.name] = datasource

        return cls(
            datasources=datasources,
        )

    @classmethod
    def _config_from_definition(cls, definition):
        from core.common.drivers.factory import load_config

        try:
            cls = load_config(definition.type)
            ds_config = json.loads(json.loads(definition.configuration)) # TODO: Fix double call
            # ds_config = json.loads(definition.configuration)
            data = cls.retrieve_data(ds_config)
            # cls.validate(data)
            config = cls.from_dict(data)
        except Exception as e:
            raise e

        return config

    def get_driver_config(self, source_name: str):
        if source_name not in self.datasources.keys():
            raise Exception("Source {} was not defined or can not be found.".format(source_name))

        return self.datasources[source_name]


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
        Column("type", String(50)),
        Column("enabled", Boolean),
        Column("configuration", Text), # TODO: Better way to not store JSON-style configuration?
        # Column('workspace', String), # TODO: Namespace by workspace
        Column('datasource', String, ForeignKey('datasource.name')),
        # Column("schedule", Text), # TODO: Figure out nested dataclass

        # TODO: Add updated_on fn
        Column("updated_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
        Column("created_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
    )
    # TODO: https://stackoverflow.com/questions/61108811/sqlalchemy-relationship-with-foreignkey-consisting-of-two-columns

    # source = relationship() # TOOD: Declare
    # workspace = relationship()

    def to_dict(self):
        obj_dict = super().to_dict()

        obj_dict['id'] = self.id
        obj_dict['updated_at'] = str(self.updated_at)
        obj_dict['created_at'] = str(self.created_at)

        return obj_dict
        
    def run(self):
        workspace = Workspace.from_datasource_definitions(Datasource.all())
        monitor = self.to_monitor(workspace)
        results = monitor.run()
        print("{} successfully ran.".format(self.name))

    def create(self):
        super().create()
        self.run()



# TODO: Polymorphic association
    # __mapper_args__ = {
    #     'polymorphic_identity':'monitor',
    #     'polymorphic_on':monitor_type,
    #     'with_polymorphic': '*'
    # }