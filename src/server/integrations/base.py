from dataclasses import dataclass

@dataclass
class IntegrationDefinition:
    name: str
    enabled: bool = True
    # configuration: ??? TODO: IntegrationConfiguration

    @classmethod
    def configuration_schema(cls):
        return {}

    @classmethod
    def validate(cls, monitor_dict):
        pass

    def to_dict(self):
        return {
            "name": self.name,
            "type": self.__class__.__name__,
            "configuration_schema": self.__class__.configuration_schema(),
        }

    @classmethod
    def from_dict(cls, integration_dict):
        return cls(
            name=integration_dict['name'],
        )

class BaseIntegration(IntegrationDefinition):
    def send(self, message):
        raise NotImplementedError()
