import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

import { rootSaga } from "./root_saga";

const sagaMiddlewere = createSagaMiddleware();
const middleWares = [logger, sagaMiddlewere];
const comoposedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  comoposedEnhancers
);
sagaMiddlewere.run(rootSaga);

export const persistor = persistStore(store);
