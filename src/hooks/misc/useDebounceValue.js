import { useState, useEffect } from "react";

/**
 * Updates the state after timeout ms.  If value is a function it should be encapsulated in a useCallback
 * @param {Function|any} value Function or value to be set as new state
 * @param {number} [timeout=500] Delay before state change
 * @returns {any} value or function result
 */
const useDebounceValue = (value, timeout = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value, timeout));
    return () => clearTimeout(handler);
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounceValue;