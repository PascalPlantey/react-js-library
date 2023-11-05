export default useDebounceResult;
/**
 * Execute a function after timeout ms of wait. Ensures that if called many times quickly, only the last version of
 * func will be executed after timeout ms after the last call. The function can change between each call. A new
 * potential call is started each time a value in the dependencies array changes
 * @param {Function} func Function to be executed
 * @param {any|Function} [dflt] Default value for the result
 * @param {Number} [timeout=500] Wait time before execution
 * @param {Array} deps Dependencies
 * @returns {any} func result
 */
declare function useDebounceResult(func: Function, dflt?: any | Function, timeout?: number | undefined, deps: any[]): any;
//# sourceMappingURL=useDebounceResult.d.ts.map