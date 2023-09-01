export default useTimer;
/**
 * Sends a render every interval ms until initialTime comes to zero
 * @param {number} secondsUntilStop Number of seconds to wait before stopping
 * @returns {useTimerResult} { remainingTime, working, toggle, reset }
 * @memberof Hooks#
 */
declare function useTimer(secondsUntilStop: number, immediately?: boolean): useTimerResult;
//# sourceMappingURL=useTimer.d.ts.map