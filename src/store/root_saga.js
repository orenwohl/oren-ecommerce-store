import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category_saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
