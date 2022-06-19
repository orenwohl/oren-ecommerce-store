import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase_utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category_action";
import CATEGORIES_ACTION_TYPES from "./category_type";

export function* fetchCateforiesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (err) {
    yield put(fetchCategoriesFailed(err));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCateforiesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
