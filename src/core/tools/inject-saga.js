import { store } from "../store";
import { isClass } from "../utils/is-class";
import { getAllMethods } from "../utils/get-all-methods";

export const injectSaga = (saga) => (Component) => {
  let targetSaga;

  if (!isClass(saga)) {
    targetSaga = saga;
  } else {
    const sagaWorkers = getAllMethods(saga);

    const workersMetaEffects = sagaWorkers
      .filter((sagaWorker) => Boolean(sagaWorker.metaEffectOptions))
      .map((sagaWorker) => sagaWorker.metaEffectOptions)
      .flat();

    targetSaga = {
      [saga.name]: function* () {
        for (const { effect, args, fn } of workersMetaEffects) {
          yield effect(args, fn);
        }
      },
    }[saga.name];
  }

  store.injectSaga(targetSaga);

  return Component;
};
