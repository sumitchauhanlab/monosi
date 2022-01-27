from . import create_app
from .models.monitor import Monitor

app = create_app()

def create_monitor_test():
	from .db import db
	monitor = Monitor(name="Anything!", description="Description", enabled=True)
	db.session.add(monitor)
	db.session.commit()

with app.app_context():
	create_monitor_test()