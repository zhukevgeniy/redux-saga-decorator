import { store } from "core/store";
import { isClass } from "core/utils/is-class";
import { reduceSagaClassToFn } from "core/utils/reduce-saga-class-to-fn";

export function injectSaga(saga) {
  return function (Component) {
    let targetSaga;

    if (isClass(saga)) {
      targetSaga = reduceSagaClassToFn(saga);
    }

    store.injectSaga(targetSaga);

    return Component;
  };
}
