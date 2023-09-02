/**
 * Indicates if a variable is a react Ref (createRef, useRef, ...)
 * @param {any} variable Variable to be tested
 * @returns {boolean}
 */
const isReactRef = variable => typeof variable === 'object' && 'current' in variable;

export default isReactRef;