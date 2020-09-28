export function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();

  const injectSaga = (saga, key = saga.name) => {
    if (injectedSagas.has(key)) {
      return;
    }

    const task = runSaga(saga);

    injectedSagas.set(key, task);
  };

  injectSaga(rootSaga);

  return injectSaga;
}
