export default useCountdown;
/**
 * Execute a function after initialSeconds has elapsed
 * @param {function} callback Function to execute when time has elapsed : () => void
 * @param {number} initialSeconds Number of seconds before callback is executed
 * @param {boolean} immediately Start countdown immediately or after resume()/restart(true) is called
 * @returns {useTimerResult} { remainingTime, working, pause, resume, restart }
 * @memberof Hooks#
 */
declare function useCountdown(callback: Function, initialSeconds: number, immediately?: boolean): useTimerResult;
//# sourceMappingURL=useCountdown.d.ts.map