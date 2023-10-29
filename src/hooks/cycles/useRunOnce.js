import { useState } from "react";

/**
 * Executes a function once only. The return value of the function indicates if it did run or not. If it returns
 * true if will not be executed anymore
 * @param {Function} fn (any) => boolean
 * @returns {Boolean} Did the function execute?
 */
const useRunOnce = fn => {
  const [done, setDone] = useState(false);

  if (!done) {
    const over = fn();
    over && setDone(true);
  }

  return done;
};

export default useRunOnce;