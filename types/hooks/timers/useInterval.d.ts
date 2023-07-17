export default useInterval;
/**
 * Execute callback every interval ms
 * @param {function} callback Function to be executed () => any
 * @param {number} [interval=1000] Render every interval ms
 * @param {boolean} [immediately=true] Start immediately?
 * @returns {Array} [working, toggle] toggle: () => void
 * @memberof Hooks#
 */
declare function useInterval(callback: Function, interval?: number | undefined, immediately?: boolean | undefined): any[];
//# sourceMappingURL=useInterval.d.ts.map