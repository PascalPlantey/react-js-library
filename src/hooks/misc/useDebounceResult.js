import { useState, useEffect, useRef } from "react";

/**
 * Execute a function after timeout ms of wait. Ensures that if called many times quickly, only the last version of
 * func will be executed after timeout ms after the last call. The function can change between each call. A new
 * potential call is started each time a value in the dependencies array changes
 * @param {Function} func Function to be executed
 * @param {any|Function} [dflt] Default value for the result
 * @param {Number} [timeout=500] Wait time before execution
 * @param {Array} deps Dependencies
 * @returns {any} func result
 */
const useDebounceResult = (func, dflt, timeout = 500, deps) => {
  const [result, setResult] = useState(dflt);
  const funcRef = useRef();
  funcRef.current = func;
  const timeoutRef = useRef();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setResult(funcRef.current), timeout);
    return () => clearTimeout(timeoutRef.current);
  }, [timeout, ...deps]); // eslint-disable-line     --- spread element in dependencies

  return result;
};

export default useDebounceResult;