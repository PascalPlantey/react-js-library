import { useState, useRef, useEffect } from 'react';

import { useWindowSize } from '../browser';

/**
 * Hook to get alerted when an HTML element's height changes. **Limitation**: there is no 'resize' event on document elements
 * so we use it on window; thus the state is not updated when another component changes, making the size of the ref.current
 * element change too (no event generated)  
 * @param {number} [step=30] Updates when window width or height changes  
 * @param {boolean} [immediately=true] Start tracking size immediately?
 * @returns {useComponentSizeResult} { height, width, ref, working, toggle }
 * @example
 * const { height, width, ref, working, toggle } = useComponentSize();
 * return <img src='...' ref={ref} />
 * @memberof Hooks#
 */
const useComponentSize = (step, immediately) => {
  const ref = useRef();
  const [size, setSize] = useState({});
  const { height, width, working, toggle } = useWindowSize(step, immediately);

  useEffect(() => {
    const elt = ref.current;
    setSize({ height: elt.offsetHeight, width: elt.offsetWidth });
  }, [height, width]);

  return { ...size, ref, working, toggle };
};

export default useComponentSize;