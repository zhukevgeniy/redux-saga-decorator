import { takeLatest as takeLatestEffect } from "redux-saga/effects";

export function takeLatest(patternOrChannel) {
  return function decorate(target, name, descriptor) {
    const targetFn = descriptor.value;

    descriptor.value = {
      [name]: function* () {
        yield takeLatestEffect(patternOrChannel, targetFn);
      },
    }[name];

    return descriptor;
  };
}
