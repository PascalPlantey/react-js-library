/**
 * Indicates if a variable is a react Ref (createRef, useRef, ...)
 * @param {any} variable Variable to be tested
 * @returns {boolean}
 */
const isRef = variable => typeof variable === 'object' && 'current' in variable;

export default isRef;