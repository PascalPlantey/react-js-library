import { useCallback, useState } from 'react';

import useInterval from './useInterval';

/**
 * Sends a render every interval ms until initialTime comes to zero
 * @param {number} secondsUntilStop Number of seconds to wait before stopping
 * @returns {useTimerResult} { remainingTime, working, pause, resume, restart }
 * @memberof Hooks#
 */
const useTimer = (secondsUntilStop, immediately = true) => {
  const [remainingTime, setRemainingTime] = useState(secondsUntilStop);

  const [working, toggle] = useInterval(() => {
    setRemainingTime(prev => Math.max(prev - 1, 0));
  }, 1000, immediately);

  working && remainingTime === 0 && toggle();                       // Stop interval if timer is consumed

  const handleToggle = useCallback(() => remainingTime > 0 && toggle(), [remainingTime]);
  const handleRestart = useCallback(() => setRemainingTime(secondsUntilStop), [secondsUntilStop]);

  return({
    working,
    remainingTime,
    toggle: handleToggle,
    restart: handleRestart
  });
};

/* Debug with -----------------------------------------------*
  const resultDesc = {
    type: 'object',
    values: [
      { name: 'working', type: 'boolean' },
      { name: 'remainingTime', type: 'number' },
      { name: 'toggle', type: 'function' },
      { name: 'restart', type: 'function' }
    ]
  };

  const res = useCheckHook('hook', useTimer, resultDesc, 5);
*/

export default useTimer;