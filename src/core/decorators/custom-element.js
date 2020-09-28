export function customElement(name) {
  return function decorate(target) {
    if (!customElements.get(name)) {
      customElements.define(name, target);
    }

    return target;
  };
}
