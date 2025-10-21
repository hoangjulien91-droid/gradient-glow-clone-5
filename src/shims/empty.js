// Empty shim module used to neutralize imports during build
// Export a harmless default and named exports if accessed
const empty = {};
export default empty;
export const noop = () => {};