import { useCallback, useRef, useState } from 'react';

import { useOnmount, useOndismount } from '../cycles';

/**
 * Execute callback every interval ms
 * @param {function} callback Function to be executed () => any
 * @param {number} [interval=1000] Render every interval ms
 * @param {boolean} [immediately=true] Start immediately?
 * @returns {Array} [working, toggle] toggle: () => void
 * @memberof Hooks#
 */
const useInterval = (callback, interval = 1000, immediately = true) => {
  const timer = useRef();                                           // Interval timer
  const [working, setWorking] = useState(immediately);

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
      setWorking(false);
    }
  };

  const startTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(callback, interval);
      setWorking(true);
    }
  };

  useOnmount(() => immediately && startTimer());
  useOndismount(() => clearInterval(timer.current));                // No state change on dismounting

  const handleToggle = useCallback(() => working ? stopTimer() : startTimer(), [working]);

  return [working, handleToggle];
};

/* Debug with ---------------------------------------------------------*
  const resultDesc = {
    type: 'array',
    values: [
      { name: 'working', type: 'boolean' },
      { name: 'toggle', type: 'function' }
    ]
  };

  const fn = useCallback(e => console.log('e', e), []);
  const res = useCheckHook('hook', useInterval, resultDesc, fn, 1000);
*/

export default useInterval;