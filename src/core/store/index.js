import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
import { createSagaInjector } from "../tools/create-saga-injector";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);
