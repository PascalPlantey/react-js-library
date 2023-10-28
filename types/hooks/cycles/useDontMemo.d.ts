export default useDontMemo;
/**
 * Execute a function immediately before every render when a dependency value changes.  Same as useMemo except
 * if does not memoize the results
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
declare function useDontMemo(fn: Function, deps: array<any>): any;
//# sourceMappingURL=useDontMemo.d.ts.map