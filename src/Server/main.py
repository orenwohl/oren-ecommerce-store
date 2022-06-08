from flask import Flask, jsonify, request

import json

from bson import ObjectId


from BL.Category_item_bl import *

from flask_cors import CORS

app = Flask(__name__)

CORS(app)


class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)


app.json_encoder = MyEncoder


category_bl = Category_items_bl()


@app.route('/category-items', methods=["GET"])
def get_all_category_items():
    return jsonify(category_bl.get_all_category_items())





app.run()
