import { useCallback, useState } from 'react';

import useInterval from '../timers/useInterval';

/**
 * Obtains current GPS position at given interval
 * @param {number} [interval=2000] Interval in ms between each get position
 * @param {boolean} [immediately=true] Starts immediately or after resume()
 * @param {object} [options] getCurrentPosition options { maximumAge, timeout, enableHighAccuracy } [Mozilla]{@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
 * @returns {object} { success, result, working, toggle }, toggle: () => void
 * @memberof Hooks#
 */
const useGeolocation = (interval = 2000, immediately = true, options) => {
  const [result, setResult] = useState();

  // Change only if needed to avoid unnecessary state update as getCurrentPosition always passes a new object
  // State update if result type is updated, or if coordinates are updated, or if the error is updated
  const handleResult = result => setResult(prevResult => {
      let changes = false;

      if ((prevResult instanceof GeolocationPosition && result instanceof GeolocationPosition) ||             // eslint-disable-line
          (prevResult instanceof GeolocationPositionError && result instanceof GeolocationPositionError)) {   // eslint-disable-line

        const prev = prevResult instanceof GeolocationPosition ? prevResult.coords : prevResult,              // eslint-disable-line
              curr = prevResult instanceof GeolocationPosition ? result.coords : result;                      // eslint-disable-line

        for(const key in prev)
          if (!(key in curr) || prev[key] !== curr[key]) {
            changes = true;
            break;
          }
      }
      else
        changes = true;

      return changes ? result : prevResult;
  });

  const getPosition = useCallback(() => navigator.geolocation.getCurrentPosition(handleResult, handleResult, options), [options]);

  const { working, toggle } = useInterval(getPosition, interval, immediately);

  const success = result instanceof GeolocationPosition ? true :                                              // eslint-disable-line
                  result instanceof GeolocationPositionError ? false :                                        // eslint-disable-line
                  false;

  return({ success, result, working, toggle });
};

/* Debug with --------------------------------------------------*
 * const resultDesc = {
 *   type: 'object',
 *   values: [
 *     { name: 'success', type: 'boolean' },
 *     { name: 'result', type: 'object' },
 *     { name: 'working', type: 'boolean' },
 *     { name: 'toggle', type: 'function' }
 *   ]
 * };
 *
 * const res = useCheckHook('hook', useGeolocation, resultDesc);
 */
export default useGeolocation;