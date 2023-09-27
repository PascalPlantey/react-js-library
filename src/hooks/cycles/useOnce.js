import { useState } from "react";

import { isFunction } from "../../js/is";

/**
 * Executes a function before first render and return the value return by the function. The value will not be updated
 * @param {function} func Function whose return value will be the value returned by useOnce
 * @returns {any} func();
 * @memberof Hooks#
 */
const useOnce = func => {
  console.assert(isFunction(func), 'useOnce parameter func should be a function, got', typeof func);
  const [result] = useState(func);
  return result;
};

export default useOnce;