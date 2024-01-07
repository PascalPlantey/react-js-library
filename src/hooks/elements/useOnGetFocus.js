import { useEffect, useState } from "react";

import { getEventTarget } from "../../js";

/**
 * Calls a function when the element gets focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=false]
 * @returns {Boolean}
 */
const useOnGetFocus = (elt, fn, hasFocus = false) => {
  const [focus, setFocus] = useState(hasFocus);

  useEffect(() => {
    const target = getEventTarget(elt);
    const targetFn = () => {
      setFocus(true);
      fn();
    };

    if (target && !hasFocus && document.activeElement !== target) {
      target.addEventListener('focus', targetFn);
      return () => target.removeEventListener('focus', targetFn);
    }
  }, [focus, elt, fn]);

  return focus;
};

export default useOnGetFocus;