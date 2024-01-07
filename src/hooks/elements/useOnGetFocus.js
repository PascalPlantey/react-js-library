import { useEffect } from "react";

import { getEventTarget } from "../../js";

/**
 * Calls a function when the element gets focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=false]
 * @returns {Boolean}
 */
const useOnGetFocus = (elt, fn, hasFocus = false) =>
  useEffect(() => {
    const target = getEventTarget(elt);

    if (target && !hasFocus && document.activeElement !== target) {
      target.addEventListener('focus', fn);
      return () => target.removeEventListener('focus', fn);
    }
  }, [focus, elt, fn]);

export default useOnGetFocus;