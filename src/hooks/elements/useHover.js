import { useState, useEffect } from 'react';

import { getEventTarget } from '../../js';

/**
 * Hook to know when the mouse gets over an element
 * @param {string|RefObject|EventTarget} ref Element to be looked for: can be a string (tag ID or selector), a ref (useRef), or an event target
 * @returns {boolean} Hover status
 * @memberof Hooks#
 */
const useHover = ref => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const elt = getEventTarget(ref);

    if (!elt) return;
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    elt.addEventListener('mouseenter', onMouseEnter);
    elt.addEventListener('mouseleave', onMouseLeave);

    return () => () => {
      elt.removeEventListener('onMouseEnter', onMouseEnter);
      elt.removeEventListener('onMouseLeave', onMouseLeave);
    }
  }, [ref])

  return hover;
};

export default useHover;