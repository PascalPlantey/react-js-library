import { useEffect, useRef } from 'react';

import { isFunction } from '../../js';

/**
 * @function useOnmount
 * @description Calls a function when the component is mounted
 * @param {function} fn Function called when the component is mounted
 * @returns {void}
 * @example
 * const listener = e => console.log(e);
 * useOnmount(() => addEventListener('mousemove', listener));
 * useOndismount(() => removeEventListener('mousemove', listener));
 * @memberof Hooks#
 */
const useOnmount = fn => {
  const init = useRef(fn);
  useEffect(() => { isFunction(init.current) && init.current(); }, []);
};

export default useOnmount;