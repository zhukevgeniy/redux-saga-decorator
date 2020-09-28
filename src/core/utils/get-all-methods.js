export function getAllMethods(Constructor) {
  const instance = new Constructor();

  return Object.getOwnPropertyNames(Constructor.prototype)
    .filter((method) => method !== "constructor")
    .map((method) => instance[method]);
}
