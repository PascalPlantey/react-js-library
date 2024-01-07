import { useEffect } from "react";

import { getEventTarget } from "../../js";

/**
 * Calls a function when the element loses focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=true]
 * @returns {Boolean}
 */
const useOnLoseFocus = (elt, fn, hasFocus = true) =>
  useEffect(() => {
    const target = getEventTarget(elt);

    if (target && hasFocus && document.activeElement === target) {
      target.addEventListener('focusout', fn);
      return () => target.removeEventListener('focusout', fn);
    }
  }, [hasFocus, elt, fn]);

export default useOnLoseFocus;