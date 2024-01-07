import { useEffect, useState } from "react";

import { getEventTarget } from "../../js";

/**
 * Calls a function when the element loses focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=true]
 * @returns {Boolean}
 */
const useOnLoseFocus = (elt, fn, hasFocus = true) => {
  const [focus, setFocus] = useState(hasFocus);

  useEffect(() => {
    const target = getEventTarget(elt);
    const targetFn = () => {
      setFocus(false);
      fn();
    };

    if (fn && target && hasFocus && document.activeElement === target) {
      target.addEventListener('focusout', targetFn);
      return () => target.removeEventListener('focusout', targetFn);
    }
  }, [focus, elt, fn]);

  return focus;
};

export default useOnLoseFocus;