export default useImmediateRunOnDepsChange;
/**
 * Execute a function immediately before render, and before any other render when a dependency value changes
 * @param {function} fn Function to be executed
 * @param {array<any>} deps Array of dependencies
 * @returns {any} Value returned by fn
 */
declare function useImmediateRunOnDepsChange(fn: Function, deps: array<any>): any;
//# sourceMappingURL=useImmediateRunOnDepsChange.d.ts.map