export default useObject;
/**
 * Use an object as state with basic operations. Useful to avoid managing operations like setState(prev => ({ ...prev, other: 4 })
 * @param {object} [initialState={}] Object value to use for initialization
 * @memberof Hooks#
 * @returns {object} { object, set: object => void, assign: (object, render = true) => void, remove: (string|string[], render = true) => void, reset: void => void, clear: void => void, render: void => void }
 * @example
 * const {
 *   object,                      // Current object value
 *   set,                         // set(object) -> replace current object
 *   assign,                      // assign(object, boolean = true) -> assign new properties, with state update or not
 *   remove,                      // remove(string|Array<string>, boolean = true) -> remove properties, with state update or not
 *   reset,                       // reset() -> object restored to initial state
 *   clear,                       // clear() -> object becomes {}
 *   render                       // render() -> object regenerated => state update
 * } = useObject({ gamma: 3 });   // object { gamma: 3 };
 *
 * assign({ beta: 2, zeta: 4 });  // object { gamma: 3, beta: 2, zeta: 4 } ==> state updated and render done
 * assign({ zut: 'done' }, false);// object { gamma: 3, beta: 2, zeta: 4, zut: 'done' } ==> state not updated
 * remove('gamma');               // object { beta: 2, zeta: 4, zut: 'done' }
 * remove(['beta', 'teta']);      // object { zeta: 4, zut: 'done' }
 * reset();                       // object { gamma: 3 };
 * set({ car: 'Honda' });         // object { car: 'Honda' }
 * clear();                       // object {}
 */
declare function useObject(initialState?: object | undefined): object;
//# sourceMappingURL=useObject.d.ts.map