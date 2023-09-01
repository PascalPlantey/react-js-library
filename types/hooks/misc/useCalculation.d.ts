export default useCalculation;
/**
 * Execute a function whenever it changes and returns its result. calculateFn should be a 'useCallback'
 * @param {function} calculateFn Function to execute () => any
 * @returns {any} Value returned by calculateFn
 * @example
 * const result = useCalculation(useCallback(() => param1 * param2, [param1, param2]));
 * @memberof Hooks#
 */
declare function useCalculation(calculateFn: Function): any;
//# sourceMappingURL=useCalculation.d.ts.map