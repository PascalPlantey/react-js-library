import { useState, useEffect } from 'react';

import { getEventTarget } from '../../js';

/**
 * Hook to be informed when an event target receives or loses focus
 * @param {string|RefObject|EventTarget} ref Element to be looked for; can be a string, tag ID or selector, and ref (useRef), or an event target
 * @returns {Array} [focus: boolean, setFocus(on: boolean): void]
 * @memberof Hooks#
 */
const useFocus = ref => {
  const [focus, innerSetFocus] = useState();

  const setFocus = bool => {
    const elt = getEventTarget(ref);
    bool ? elt.focus() : elt.blur();
  };

  useEffect(() => {
    const onFocus = () => innerSetFocus(true);
    const onBlur = () => innerSetFocus(false);

    const elt = getEventTarget(ref);
    elt.addEventListener('focus', onFocus);
    elt.addEventListener('blur', onBlur);

    innerSetFocus(document.activeElement === elt);

    return () => () => {
      elt.removeEventListener('focus', onFocus);
      elt.removeEventListener('blur', onBlur);
    };
  }, [ref]);

  return [focus, setFocus];
};

export default useFocus;