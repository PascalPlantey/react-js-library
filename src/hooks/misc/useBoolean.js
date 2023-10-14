import { useCallback, useState } from "react";

/**
 * Simple hook for a boolean value
 * @param {boolean} [initial=false] Initial value
 * @returns {Array} [value, setValue(), toggle()]
 */
const useBoolean = (initial = false) => {
  const [value, setValue] = useState(!!initial);

  return([
    value,
    useCallback(setValue, []),
    useCallback(() => setValue(prev => !prev), [])
  ]);
};

export default useBoolean;