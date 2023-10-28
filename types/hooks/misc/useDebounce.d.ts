export default useDebounce;
/**
 * Updates the state after timeout ms.  If value is a function it should be encapsulated in a useCallback
 * @param {Function|any} value Function or value to be set as new state
 * @param {number} [timeout=500] Delay before state change
 * @returns {any} value or function result
 */
declare function useDebounce(value: Function | any, timeout?: number | undefined): any;
//# sourceMappingURL=useDebounce.d.ts.map