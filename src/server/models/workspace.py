from dataclasses import dataclass
import json
from sqlalchemy import Boolean, Column, DateTime, Integer, String, Table, Text, func

from . import Base, mapper_registry
from .base import CrudMixin

# TODO: Is this necessary? Is it actually mapped?
# @mapper_registry.mapped


# @dataclass
# class WorkspaceDefinition:
#     datasources: List[Datasource]
#     monitors: List[Monitor]


@dataclass
class Workspace(Base, CrudMixin):
    # TODO: Abstract id, created_at, updated_at
    __table__ = Table(
        "workspace",
        mapper_registry.metadata,
        Column("id", Integer, primary_key=True),
        Column("name", String(50), primary_key=True),

        # TODO: Add updated_on fn
        Column("updated_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
        Column("created_at", DateTime(timezone=True), nullable=False, server_default=func.now()),
    )

    def to_dict(self):
        obj_dict = super().to_dict()

        obj_dict['id'] = self.id
        obj_dict['updated_at'] = str(self.updated_at)
        obj_dict['created_at'] = str(self.created_at)

        return obj_dict