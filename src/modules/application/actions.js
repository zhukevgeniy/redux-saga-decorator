import { createAction } from "redux-actions";

export const initializeApplicationRequest = createAction(
  "initialize_application_request"
);

export const initializeApplicationReceive = createAction(
  "initialize_application_receive"
);
