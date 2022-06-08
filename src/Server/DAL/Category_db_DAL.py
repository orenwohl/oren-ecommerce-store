from pymongo import MongoClient
from bson import ObjectId
import requests


class Category_db_DAL:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["oren-store"]

    @property
    def menu_items_db(self):
        return self.__db["menu-items"]
    

    def get_all_category_items(self):
        menu_items = []
        cus = self.menu_items_db.find({})
        for product in cus:
            menu_items.append(product)
        return menu_items
    
