import { useEffect, useState } from "react";

import { useToggle } from "../misc";

/**
 * Executes a function once only. The return value of the function indicates if it did run or not. If it returns
 * true if will not be executed anymore
 * @param {Function} fn (any) => boolean - fn should be a useCallback
 * @returns {Boolean} Did the function execute?
 */
const useRunOnce = fn => {
  const [done, setDone] = useState(false);
  const [again, tryAgain] = useToggle();

  useEffect(() => {
    if (!done)
      fn() ? setDone(true) : tryAgain();
  }, [fn, done, tryAgain, again])

  return done;
};

export default useRunOnce;