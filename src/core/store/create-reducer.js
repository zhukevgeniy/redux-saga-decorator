import { combineReducers } from "redux";

export function createReducer({ rootReducer, reducers } = {}) {
  return combineReducers({
    ...rootReducer,
    ...reducers,
  });
}
