from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import sys

from .db import db
from .api import MsiApi


# Add all monosi modules to PYTHON_PATH
cur_dir_path = os.path.dirname(os.path.realpath(__file__))
path = os.path.join('../', cur_dir_path)
sys.path.append(path)


def _build_path():
    build_path = os.path.join(path, 'ui/build/')
    if not os.path.exists(build_path):
        raise Exception("Client UI was not built before attempting to serve via Flask.")

    return build_path

def _serve_ui(path=''):
    build_path = _build_path()
    req_path = os.path.join(build_path, path)

    if req_path == build_path or not os.path.exists(req_path):
        path = "index.html"

    return send_from_directory(build_path, path)

def _init_ui(app):
    if not app.config['SERVE_UI']:
        return

    app.static_folder =  os.path.join(_build_path(), "static")
    app.add_url_rule("/", view_func=_serve_ui)
    app.add_url_rule("/<path:path>", view_func=_serve_ui)


def create_app():
    # Initialize Server
    app = Flask(__name__)
    CORS(app, resources={r"/v1/api/*": {"origins": "*"}})
    app_settings = os.getenv(
        'APP_SETTINGS',
        'server.config.Config'
    )
    app.config.from_object(app_settings)

    _init_ui(app)

    # Initialize DB
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Initialize API
    api = MsiApi(app)

    return app
