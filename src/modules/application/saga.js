import { delay, put } from "redux-saga/effects";
import { takeLatest } from "../../core/effects/takeLatest";
import {
  initializeApplicationReceive,
  initializeApplicationRequest,
} from "./actions";

export class ApplicationSaga {
  @takeLatest(initializeApplicationRequest)
  *start() {
    try {
      yield delay(300);

      yield put(initializeApplicationReceive());
    } catch (error) {
      console.error(error);
    }
  }
}
