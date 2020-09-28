import { combineReducers } from "redux";
import { ApplicationReducer } from "../../modules/application/reducer";

export const RootReducer = combineReducers({
  application: ApplicationReducer,
});
