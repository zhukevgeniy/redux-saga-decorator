import { store } from "core/store";

export function injectReducer({ key, reducer }) {
  return function (Component) {
    store.injectReducer(reducer, key);

    return Component;
  };
}
