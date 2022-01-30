from dataclasses import dataclass, field

from core.common.drivers import DriverConfig

@dataclass
class SnowflakeConfiguration(DriverConfig):
    account: str = field(default_factory=str)
    password: str = field(default_factory=str)
    user: str = field(default_factory=str)
    warehouse: str = field(default_factory=str)
    host: str = field(default_factory=str)

    def driver_name(self):
        return "snowflake"

    @classmethod
    def retrieve_data(cls, config_dict):
        return {
            'user': config_dict.get('user'),
            'password': config_dict.get('password'),
            'database': config_dict.get('database'),
            'account': config_dict.get('account'),
            'host': cls._host(config_dict.get('account')),
            'warehouse': config_dict.get('warehouse'),
        }

    @classmethod
    def validate(cls, config_dict):
        pass

    @classmethod
    def from_dict(cls, config_dict):
        return cls(**config_dict)
    
    @classmethod
    def _host(cls, account, region=None):
        if region:
            return "{}.{}.snowflakecomputing.com".format(account, region)

        return "{}.snowflakecomputing.com".format(account)
 
    def to_dict(self):
        return {
            'user': self.user,
            'password': self.password,
            'database': self.database,
            'account': self.account,
            'host': self.__class__._host(self.account),
            'warehouse': self.warehouse,
        }
