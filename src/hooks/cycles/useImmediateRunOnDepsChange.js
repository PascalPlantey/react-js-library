import { useRef } from "react";

import { surfaceEquals } from "../../js/extensions";
import { useCheckValuesChanges } from "../misc";

/**
 * Execute a function immediately before every render when a dependency value changes
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
const useImmediateRunOnDepsChange = (fn, deps) => {
  const [, checkChanges] = useCheckValuesChanges();
  const resultRef = useRef();

  if (checkChanges(deps))
    resultRef.current = fn();

  return resultRef.current;
};

export default useImmediateRunOnDepsChange;