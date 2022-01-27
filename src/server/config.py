import os

class BaseConfig:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious')
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///sqlite.db" # TODO: ~/.monosi/sqlite.db

class DevelopmentConfig(BaseConfig):
    """Development configuration."""
    DEBUG = True

class TestingConfig(BaseConfig):
    """Testing configuration."""
    DEBUG = True
    TESTING = True

class ProductionConfig(BaseConfig):
    """Production configuration."""
    SECRET_KEY = 'my_precious'
    DEBUG = False

Config = DevelopmentConfig
if os.getenv('FLASK_ENV') == "production":
    Config = ProductionConfig
