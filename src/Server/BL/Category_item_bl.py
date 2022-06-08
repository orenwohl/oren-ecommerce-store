from DAL.Category_db_DAL import *


class Category_items_bl:
    def __init__(self):
        self.__users_db_dal = Category_db_DAL()

    def get_all_category_items(self):
        return self.__users_db_dal.get_all_category_items()


