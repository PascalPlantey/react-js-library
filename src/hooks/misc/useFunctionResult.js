import { useState, useCallback, useEffect } from 'react';

import useIsFirstRender from '../cycles/useIsFirstRender';

/**
 * Hook to get the result of a function: at first the function is immediately executed and its result returned.
 * The result is updated each time an element in the dependencies list changes.
 * @param {function} func Function to be executed () => any
 * @param {Array<any>} dependencies List of dependencies
 * @returns {any} `func` result
 * @warning Double check the dependencies array or you might get infinite renders or none if you forget some.
 * Typically all the function parameters should be in the dependencies list
 * @memberof Hooks#
 */
const useFunctionResult = (func, dependencies) => {
  const isFirstRender = useIsFirstRender();
  const [result, setResult] = useState(func);

  // eslint-disable-next-line
  const memoizedFunc = useCallback(func, [...dependencies]);

  useEffect(() => {
    if (!isFirstRender)
      setResult(memoizedFunc());
  }, [memoizedFunc, isFirstRender]);

  return result;
};

export default useFunctionResult;