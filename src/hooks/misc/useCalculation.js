import { useState, useEffect } from 'react';

import useIsFirstRender from '../cycles/useIsFirstRender';

/**
 * Execute a function whenever it changes and returns its result. calculateFn should be a 'useCallback'
 * @param {function} calculateFn Function to execute () => any
 * @returns {any} Value returned by calculateFn
 * @example
 * const result = useCalculation(useCallback(() => param1 * param2, [param1, param2]));
 * @memberof Hooks#
 */
const useCalculation = calculateFn => {
  const isFirstRender = useIsFirstRender();
  const [result, setResult] = useState(calculateFn);

  useEffect(() => {
    if (!isFirstRender)
      setResult(calculateFn());
  }, [calculateFn]);

  return result;
};

export default useCalculation;