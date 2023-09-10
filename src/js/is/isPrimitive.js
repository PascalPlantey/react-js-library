/**
 * Indicates if value is a primitive type
 * @param {any} value Value to be checked
 * @returns {boolean}
 */
const isPrimitive = value => value !== Object(value);

export default isPrimitive;