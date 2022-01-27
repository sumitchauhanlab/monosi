from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import sys

from .db import db
from .api import MsiApi

# Add all monosi modules to PYTHON_PATH
path = os.path.abspath('../')
sys.path.append(path)

def create_app():
    # Initialize Server
    app = Flask(__name__)
    CORS(app, resources={r"/v1/api/*": {"origins": "*"}}) # TODO: Check allow all origins?
    app_settings = os.getenv(
        'APP_SETTINGS',
        'server.config.Config'
    )
    app.config.from_object(app_settings)

    # Initialize DB
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Initialize API
    api = MsiApi(app)

    return app
