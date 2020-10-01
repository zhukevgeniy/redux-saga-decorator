import { handleActions } from "redux-actions";
import {
  initializeApplicationReceive,
  initializeApplicationRequest,
} from "containers/application/actions";

const initialState = {
  isInitialized: null,
};

export const ApplicationReducer = handleActions(
  {
    [initializeApplicationRequest]: (state) => ({
      ...state,
      isInitialized: false,
    }),
    [initializeApplicationReceive]: (state) => ({
      ...state,
      isInitialized: true,
    }),
  },
  initialState
);
