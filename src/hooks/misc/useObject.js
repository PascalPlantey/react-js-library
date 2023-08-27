import { useState, useCallback } from "react";

/**
 * Use an object as state with basic operations. Useful to avoid managing operations like setState(prev => ({ ...prev, other: 4 })
 * @param {object} [initialState={}] Object value to use for initialization
 * @memberof Hooks#
 * @returns {object} { object, set: object => void, assign: object => void, remove: (string|string[]) => void, reset: void => void, clear: void => void }
 * @example
 * const {
 *   object,                      // Current object value
 *   set,                         // Replace state with a new object
 *   assign,                      // Assign properties of parameter to the state
 *   remove,                      // Remove one or many properties from the state
 *   reset,                       // Reinitialize state with initialState
 *   clear                        // Set an empty object as new state
 * } = useObject({ gamma: 3 });   // object { gamma: 3 };
 * 
 * assign({ beta: 2, zeta: 4 });  // object { gamma: 3, beta: 2, zeta: 4 }
 * remove('gamma');               // object { beta: 2, zeta: 4 }
 * remove(['beta', 'teta']);      // object { zeta: 4 }
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
  const assign = useCallback(patch => setState(prev => ({ ...prev, ...patch })), []);

  // Remove one or many properties from state object
  const remove = useCallback(properties => setState(prev => {
    // Assume 'properties' is a string or an array of strings
    const values = typeof properties === 'string' ? [properties] : properties;

    for(const value of values)
      delete prev[value];

    return { ...prev };
  }), []);

  return({ object: state, set, assign, remove, reset, clear });
};

export default useObject;