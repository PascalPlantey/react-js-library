import { useState, useEffect, useRef } from "react";
import { resolve } from "../../js";

/**
 * Execute a function after timeout ms of wait. Ensures that if called many times quickly, only the last version of
 * func will be executed after timeout ms after the last call. The function can change between each call. A new
 * potential call is started each time a value in the dependencies array changes
 * @param {Function} func Function to be executed
 * @param {any|Function} [dflt] Default value for the result
 * @param {Number} [timeout=500] Wait time before execution
 * @param {Array} deps Dependencies
 * @returns {any} func result
 * @maintenance
 * + 16/01/2024: setting result to dflt when a calculation is started, so that parent can show a Spin or whatever
 */
const useDebounceResult = (func, dflt, timeout = 500, deps) => {
  const [result, setResult] = useState(dflt);
  const funcRef = useRef();
  funcRef.current = func;
  const timeoutRef = useRef();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setResult(funcRef.current), timeout);
    setResult(resolve(dflt));
    return () => clearTimeout(timeoutRef.current);
  }, [timeout, ...deps]); // eslint-disable-line     --- spread element in dependencies

  return result;
};

export default useDebounceResult;