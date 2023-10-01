import { useRef } from "react";

import { surfaceEquals } from "../../js/extensions";

/**
 * Execute a function immediately before render, and before any other render when a dependency value changes
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
const useImmediateRunOnDepsChange = (fn, deps) => {
  const resultRef = useRef();
  const depsRef = useRef([]);
  const updateDepsRef = () => {
    const changed = !surfaceEquals(depsRef.current, deps);
    depsRef.current = deps;
    return changed;
  }

  if (updateDepsRef()) resultRef.current = fn();

  return resultRef.current;
};

export default useImmediateRunOnDepsChange;