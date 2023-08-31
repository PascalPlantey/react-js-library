import { useState } from 'react';

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

  const onResult = value => setResult(value);

  const getPosition = () => navigator.geolocation.getCurrentPosition(onResult, onResult, options);

  const { working, toggle } = useInterval(getPosition, interval, immediately);

  const successStatus = result instanceof GeolocationPosition ? true :
                        result instanceof GeolocationPositionError ? false :
                        undefined;

  return({ success: successStatus, result, working, toggle });
};

export default useGeolocation;