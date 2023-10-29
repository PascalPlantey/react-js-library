export default useRunOnce;
/**
 * Executes a function once only. The return value of the function indicates if it did run or not. If it returns
 * true if will not be executed anymore
 * @param {Function} fn (any) => boolean - fn should be a useCallback
 * @returns {Boolean} Did the function execute?
 */
declare function useRunOnce(fn: Function): boolean;
//# sourceMappingURL=useRunOnce.d.ts.map