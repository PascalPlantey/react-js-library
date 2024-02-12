import { useRef } from "react";

import { useCheckValuesChanges } from "../misc";

/**
 * Execute a function immediately before every render when a dependency value changes.  Same as useMemo except
 * if does not memoize the results
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
const useDontMemo = (fn, deps) => {
  const [, checkChanges] = useCheckValuesChanges();
  const resultRef = useRef();

  if (checkChanges(deps))
    resultRef.current = fn();

  return resultRef.current;
};

export default useDontMemo;