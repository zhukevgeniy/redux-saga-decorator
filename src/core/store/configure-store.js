import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { rootSaga } from "core/store/root-saga";
import { RootReducer } from "core/store/root-reducer";
import { createReducer } from "core/store/create-reducer";
import { createSagaInjector } from "core/injectors/create-saga-injector";
import { createReducerInjector } from "core/injectors/create-reducer-injector";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer({ rootReducer: RootReducer }),
    applyMiddleware(sagaMiddleware)
  );

  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

  store.injectReducer = createReducerInjector(store.replaceReducer);

  return store;
}
