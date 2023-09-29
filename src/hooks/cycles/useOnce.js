import { useState } from "react";

/**
 * Executes a function before first render and return the value return by the function or keeps a value which cannot be updated
 * @param {function|any} func Function whose return value will be the value returned by useOnce
 * @returns {any} Function returned value or func if it is not a function
 * @memberof Hooks#
 */
const useOnce = func => {
  const [result] = useState(func);
  return result;
};

export default useOnce;