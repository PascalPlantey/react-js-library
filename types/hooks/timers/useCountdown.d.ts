export default useCountdown;
/**
 * Execute a function after initialSeconds has elapsed
 * @param {function} callback Function to execute when time has elapsed : () => void
 * @param {number} initialSeconds Number of seconds before callback is executed
 * @param {boolean} immediately Start countdown immediately or after toggle()/reset() is called
 * @returns {useTimerResult} { remainingTime, working, toggle, reset }
 * @memberof Hooks#
 */
declare function useCountdown(action: any, runAfterSeconds: any, immediately?: boolean): useTimerResult;
//# sourceMappingURL=useCountdown.d.ts.map