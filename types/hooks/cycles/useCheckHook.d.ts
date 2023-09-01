export default useCheckHook;
/**
 * Debugging tool to check a hook. Using the hook parameters and description of the returned value, useCheckHook will:
 * + force a first render with current parameters
 * + check, after each render, which elements of the returned value could generate re-renders or calculations. If some elements
 * of the returned value change after each render, they are could candidates for a useMemo, useCallback, ... and
 * the hook should be verified/modified
 * @param {string} name Name of the hook, used for display only
 * @param {function} useHook Hook to be tested
 * @param {object} resultDescription Structure describing the returned result of the useHook function
 * @param {string} resultDescription.type Type of the value returned by the hook, 'simple', 'object' or 'array'
 * @param {array<{ name: string, type: string }>} resultDescription.values Values { name: string, type: string }
 * @param  {...any} params Parameters to be passed to the useHook function
 * @returns {any} The value returned by the useHook function
 * @memberof Hooks#
 * @example
 * const resultDesc = {
 *   type: 'object',                            // Can be 'object', 'array', 'simple' (for string, number, ...)
 *   values: [                                  // Describes the elements of the returned value (only one if type is 'simple')
 *     { name: 'height', type: 'number' },
 *     { name: 'width', type: 'number' },
 *     { name: 'working', type: 'boolean' },
 *     { name: 'toggle', type: 'function' }
 *   ]
 * };
 *
 * const { width, height } = useCheckHook('useWindowSize', useWindowSize, resultDesc, step);
 * console.log('size', width, height);
 */
declare function useCheckHook(name: string, useHook: Function, resultDescription: {
    type: string;
    values: array<{
        name: string;
        type: string;
    }>;
}, ...params: any[]): any;
//# sourceMappingURL=useCheckHook.d.ts.map