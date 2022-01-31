from . import create_app
from .models.datasource import Datasource
from .models.monitor import Monitor

app = create_app()

def create_monitor_test():
	print("call!")
	from .db import db

	# try:
	# 	datasource = Datasource(
	# 		name="Snowflake Example",
	# 		type="snowflake",
	# 		configuration='{"user": "IVANQZ", "password": "L4v4G1rl$$$", "account": "HKA29277", "warehouse": "COMPUTE_WH", "database": "SNOWFLAKE_SAMPLE_DATA"}',
	# 	)
	# 	datasource.create()
	# except Exception as e:
	# 	pass
	# 	# pass # already created

	# monitor = Monitor(
	# 	name="Example Monitor",
	# 	description="Description",
	# 	enabled=True,
	# 	datasource="Snowflake Example",
	# 	type="table",
	# 	configuration='{"table": "snowflake_sample_data.tpch_sf1000.lineitem", "timestamp_field": "L_COMMITDATE"}',
	# )
	# monitor.create()

with app.app_context():
	create_monitor_test()
