export default useImmediateRunOnDepsChange;
/**
 * Execute a function immediately before every render when a dependency value changes
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
declare function useImmediateRunOnDepsChange(fn: Function, deps: array<any>): any;
//# sourceMappingURL=useNotMemo.d.ts.map