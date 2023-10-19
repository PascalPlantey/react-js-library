import { useCallback, useRef, useState } from 'react';

import { useOnmount, useOndismount } from '../cycles';

/**
 * Execute callback every interval ms
 * @param {function} callback Function to be executed () => any
 * @param {number} [interval=1000] Render every interval ms
 * @param {boolean} [immediately=true] Start immediately?
 * @returns {object} { working, toggle: () => void, stop: () => void, start: () => void }
 * @memberof Hooks#
 */
const useInterval = (callback, interval = 1000, immediately = true) => {
  const timer = useRef();                                           // Interval timer
  const [working, setWorking] = useState(immediately);

  const handleStop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
      setWorking(false);
    }
  }, [timer]);

  const handleStart = useCallback(() => {
    if (!timer.current) {
      timer.current = setInterval(callback, interval);
      setWorking(true);
    }
  }, [timer, callback, interval]);

  useOnmount(() => immediately && handleStart());
  useOndismount(() => clearInterval(timer.current));                // No state change on dismounting

  const handleToggle = useCallback(
    () => working ? handleStop() : handleStart()
  , [working, handleStart, handleStop]);

  return({
    working,
    toggle: handleToggle,
    stop: handleStop,
    start: handleStart
  });
};

/* Debug with ---------------------------------------------------------*
  const resultDesc = {
    type: 'object',
    values: [
      { name: 'working', type: 'boolean' },
      { name: 'toggle', type: 'function' },
      { name: 'stop', type: 'function' },
      { name: 'start', type: 'function' }
    ]
  };

  const fn = useCallback(e => console.log('e', e), []);
  const res = useCheckHook('hook', useInterval, resultDesc, fn, 1000);
*/

export default useInterval;