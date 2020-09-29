import { takeLatest as takeLatestEffect } from "redux-saga/effects";

export function takeLatest(patternOrChannel) {
  return function decorate(target, name, descriptor) {
    const effectOption = {
      effect: takeLatestEffect,
      args: patternOrChannel,
      fn: descriptor.value,
    };

    descriptor.value.metaEffectOptions = [
      ...(descriptor.value?.metaEffectOptions || []),
      effectOption,
    ];

    return descriptor;
  };
}
