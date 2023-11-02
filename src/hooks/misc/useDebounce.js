import { useRef } from "react";

import { debounce } from "../../js";

/**
 * @param {Function} func Function to be debounced
 * @param {number} [timeout]
 * @returns {Function} To be called as a debounce
 */
const useDebounce = (func, timeout) => {
  const ref = useRef(debounce(func, timeout));
  return ref.current
};

export default useDebounce;