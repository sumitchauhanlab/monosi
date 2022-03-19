import json

from .base import SQLAlchemyExtractor, SourceConfiguration, SQLAlchemySourceDialect, SQLAlchemySource

class PostgreSQLSourceConfiguration(SourceConfiguration):
    @classmethod
    def validate(cls, configuration):
        raise NotImplementedError

    @classmethod
    def configuration_schema(cls):
        return {
            "type": "object",
            "properties": {
                "user": { "type": "string" },
                "password": { "type": "string" },
                "host": { "type": "string" },
                "port": { "type": "string" },
                "database": { "type": "string" },
                "schema": { "type": "string" },
            },
            "secret": [ "password" ],
        }
    
    def _connection_string_prefix(self):
        return "postgresql"

    def connection_string(self) -> str:
        configuration = json.loads(self.configuration)
        connection_string_prefix = self._connection_string_prefix()

        return '{prefix}://{user}:{password}@{host}:{port}/{database}'.format(
            prefix=connection_string_prefix,
            user=configuration.get('user'),
            password=configuration.get('password'),
            host=configuration.get('host'),
            port=configuration.get('port'),
            database=configuration.get('database'),
            schema=configuration.get('schema'),
        )

    @property
    def type(self):
        return "postgresql"

class PostgreSQLSourceDialect(SQLAlchemySourceDialect):
    @classmethod
    def _numeric_std(cls):
        return "STDDEV(CAST({} as double precision))"
    
    @classmethod
    def _text_int_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([-+]?[0-9]+)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_number_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([-+]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_uuid_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^([0-9a-fA-F]{{8}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{4}}-[0-9a-fA-F]{{12}})$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_all_spaces_rate(cls):
        return "SUM(CASE WHEN CAST({} AS varchar) ~ '^(\\\\s+)$' THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _text_null_keyword_rate(cls):
        return "SUM(CASE WHEN UPPER(CAST({} as varchar)) IN ('NULL', 'NONE', 'NIL', 'NOTHING') THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _zero_rate(cls): # TODO: ?
        return "SUM(CASE WHEN UPPER(CAST({} as varchar)) IN ('NULL', 'NONE', 'NIL', 'NOTHING') THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _negative_rate(cls):
        return "SUM(CASE WHEN {} < 0 THEN 1 ELSE 0 END) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def _completeness(cls):
        return "COUNT({}) / CAST(COUNT(*) AS NUMERIC)"

    @classmethod
    def schema_tables_query(cls, database_name, schema_name):
        raise NotImplementedError

    @classmethod
    def schema_columns_query(cls, database_name, schema_name):
        raise NotImplementedError

    @classmethod
    def query_access_logs_query(cls):
        raise NotImplementedError
        
    @classmethod
    def query_copy_logs_query(cls):
        raise NotImplementedError

class PostgreSQLSourceExtractor(SQLAlchemyExtractor):
    def discovery_query(self):
        return PostgreSQLSourceDialect.schema_columns_query(
            database_name=self.configuration.database(),
            schema_name=self.configuration.schema(),
        )

class PostgreSQLSource(SQLAlchemySource):
    def __init__(self, configuration: PostgreSQLSourceConfiguration):
        self.configuration = configuration
        self.dialect = PostgreSQLSourceDialect

    def extractor(self):
        return PostgreSQLSourceExtractor(self.configuration)

