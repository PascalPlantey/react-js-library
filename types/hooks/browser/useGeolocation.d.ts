export default useGeolocation;
/**
 * Obtains current GPS position at given interval
 * @param {number} [interval=2000] Interval in ms between each get position
 * @param {boolean} [immediately=true] Starts immediately or after resume()
 * @param {object} [options] getCurrentPosition options { maximumAge, timeout, enableHighAccuracy } [Mozilla]{@link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition}
 * @returns {object} { success, result, working, toggle }, toggle: () => void
 * @memberof Hooks#
 */
declare function useGeolocation(interval?: number | undefined, immediately?: boolean | undefined, options?: object | undefined): object;
//# sourceMappingURL=useGeolocation.d.ts.map