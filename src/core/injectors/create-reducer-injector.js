import { createReducer } from "core/store/create-reducer";

export function createReducerInjector(replaceReducer) {
  const injectedReducers = new Map();

  return function injectReducer(reducer, key = reducer.name) {
    if (injectedReducers.has(key)) {
      return;
    }

    injectedReducers.set(key, reducer);

    replaceReducer(
      createReducer({ reducers: Object.fromEntries(injectedReducers) })
    );

    return function ejectReducer() {
      injectedReducers.delete(key);
    };
  };
}
