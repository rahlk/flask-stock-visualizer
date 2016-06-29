#! ./local/bin/python -B 
from flask import Flask, render_template, jsonify
from stock_scraper import get_data
import os
from pdb import set_trace

app = Flask(__name__)


@app.route("/dataroute")
def data():
    return jsonify(get_data())


@app.route("/")
def index():
    return render_template("visualize.html")


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(debug=True, use_debugger=True, port=port)

