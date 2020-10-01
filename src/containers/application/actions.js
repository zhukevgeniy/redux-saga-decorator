import { createAction } from "redux-actions";

const namespace = "application:";

export const initializeApplicationRequest = createAction(
  `${namespace}initialize_application_request`
);

export const initializeApplicationReceive = createAction(
  `${namespace}initialize_application_receive`
);
