import { useState, useCallback } from "react";

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
 *   remove,                      // remove(string|Array<string>, boolean = true) -> remove properties
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
const useObject = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  // Restore initialState
  const reset = useCallback(() => setState(initialState), [initialState]);

  // Empty state object
  const clear = useCallback(() => setState({}), []);

  // Replace state object with 'obj'
  const set = useCallback(obj => setState(obj), []);

  // Assign 'patch' properties to state object
  const assign = useCallback((patch, render = true) => {
    if (render)
      setState(prev => ({ ...prev, ...patch }));
    else
      for(const key in patch)
        state[key] = patch[key];
  }, [state]);

  // Remove one or many properties from state object
  const remove = useCallback((properties, render = true) => setState(prev => {
    // Assume 'properties' is a string or an array of strings
    const values = typeof properties === 'string' ? [properties] : properties;

    for(const value of values)
      delete prev[value];

    return render ? { ...prev } : prev;
  }), []);

  // Force a state update
  const render = useCallback(() => setState(prev => ({ ...prev })), []);

  return({
    object: state,
    set,
    assign,
    remove,
    reset,
    clear,
    render
  });
};

// Could use this return value, but not sure it helps: assign({ x: 'x' }, false) does not generate a render and
// in the parent, useEffect(() => { console.log('effect') }, [object]), is not called
// return useMemo(() => ({
//   object: state,
//   set,
//   assign,
//   remove,
//   reset,
//   clear,
//   render
// }), [state, set, assign, remove, reset, clear, render]);

export default useObject;