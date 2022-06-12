import CATEGORIES_ACTION_TYPES from "./category_type";
import { createAction } from "../../utils/reducer/reducer_utils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
