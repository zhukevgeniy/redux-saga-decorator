import { all } from "redux-saga/effects";
import { store } from "../store";
import { isClass } from "../utils/is-class";
import { getAllMethods } from "../utils/get-all-methods";

export const injectSaga = (saga) => (Component) => {
  let targetSaga;

  if (!isClass(saga)) {
    targetSaga = saga;
  } else {
    const sagaWorkers = getAllMethods(saga);

    targetSaga = {
      [saga.name]: function* () {
        yield all(sagaWorkers.map((sagaWorker) => sagaWorker()));
      },
    }[saga.name];
  }

  store.injectSaga(targetSaga);

  return Component;
};
