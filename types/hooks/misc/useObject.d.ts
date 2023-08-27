export default useObject;
/**
 * Use an object as state with basic operations. Useful to avoid managing operations like setState(prev => ({ ...prev, other: 4 })
 * @param {object} [initialState={}] Object value to use for initialization
 * @memberof Hooks#
 * @returns {object} { state, set: object => void, assign: object => void, remove: (string|string[]) => void, reset: void => void, clear: void => void }
 * @example
 * const {
 *   state,                       // Current object value
 *   set,                         // Replace state with a new object
 *   assign,                      // Assign properties of parameter to the state
 *   remove,                      // Remove one or many properties from the state
 *   reset,                       // Reinitialize state with initialState
 *   clear                        // Set an empty object as new state
 * } = useObject({ gamma: 3 });   // state { gamma: 3 };
 *
 * assign({ beta: 2, zeta: 4 });  // state { gamma: 3, beta: 2, zeta: 4 }
 * remove('gamma');               // state { beta: 2, zeta: 4 }
 * remove(['beta', 'teta']);      // state { zeta: 4 }
 * reset();                       // state { gamma: 3 };
 * set({ car: 'Honda' });         // state { car: 'Honda' }
 * clear();                       // state {}
 */
declare function useObject(initialState?: object | undefined): object;
//# sourceMappingURL=useObject.d.ts.map