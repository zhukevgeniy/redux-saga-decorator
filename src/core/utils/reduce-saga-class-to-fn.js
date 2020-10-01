import { getAllMethods } from "core/utils/get-all-methods";

export function reduceSagaClassToFn(sagaClass) {
  const sagaWorkers = getAllMethods(sagaClass);

  const workersMetaEffects = sagaWorkers
    .filter((sagaWorker) => Boolean(sagaWorker.metaEffectOptions))
    .map((sagaWorker) => sagaWorker.metaEffectOptions)
    .flat();

  return {
    [sagaClass.name]: function* () {
      for (const { effect, args, fn } of workersMetaEffects) {
        yield effect(args, fn);
      }
    },
  }[sagaClass.name];
}
