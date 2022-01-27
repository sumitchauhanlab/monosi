# from sqlalchemy import Column, DateTime, Integer, func
from sqlalchemy.orm import declarative_base, registry

mapper_registry = registry()
Base = mapper_registry.generate_base()

# class BaseModel(Base):
#     query_class = MsiQuery

# class BaseModelMixin(object):
#     id = Column(Integer, primary_key=True)
#     updated_at = Column(DateTime(timezone=True), nullable=False, default=func.now())
#     created_at = Column(DateTime(timezone=True), nullable=False, default=func.now())

#     @classmethod
#     def validate(cls, model_dict):
#         pass

#     @classmethod
#     def from_dict(cls, model_dict):
#         pass

#     def to_dict(self):
#         pass
