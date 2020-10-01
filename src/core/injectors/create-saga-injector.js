export function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();

  const injectSaga = (saga, key = saga.name) => {
    if (injectedSagas.has(key)) {
      return;
    }

    const task = runSaga(saga);

    injectedSagas.set(key, task);

    return function ejectSaga() {
      injectedSagas.delete(key);
    };
  };

  injectSaga(rootSaga);

  return injectSaga;
}
