export function customElement(name, options) {
  return function decorate(constructor) {
    if (!customElements.get(name)) {
      customElements.define(name, constructor, options);
    }

    constructor.toString = () => {
      return `<${name}></${name}>`;
    };

    return constructor;
  };
}
