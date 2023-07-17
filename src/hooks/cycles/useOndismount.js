import { useRef, useEffect } from 'react';

/**
 * @function useOndismount
 * @description Calls a function when the component is dismounted
 * @param {function} fn Function called when the component is dismounted
 * @returns {void}
 * @example
 * const listener = e => console.log(e);
 * useOnmount(() => addEventListener('mousemove', listener));
 * useOndismount(() => removeEventListener('mousemove', listener));
 * @memberof Hooks#
 */
const useOndismount = fn => {
  const cleanup = useRef(fn);
  useEffect(() => () => cleanup.current && cleanup.current(), []);
};

export default useOndismount;