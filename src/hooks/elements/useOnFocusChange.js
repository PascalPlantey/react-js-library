import { useEffect, useRef, useState } from "react";

import { getEventTarget } from "../../js";

/**
 * State change when elt gets or loses focus
 * @param {Element|String|import("react").RefObject} elt 
 * @returns {boolean} True if elt has focus
 */
const useOnFocusChange = elt => {
  const [hasFocus, setHasFocus] = useState();
  const refElt = useRef();

  useEffect(() => {
    refElt.current = getEventTarget(elt);
    setHasFocus(document.activeElement === refElt.current);       // Initial focus state from document active element
  }, []);

  useEffect(() => {
    const target = refElt.current;

    const event = hasFocus === false ?                            // Switch from listening lose to get focus or versa vice
      ['focus', () => setHasFocus(true)] :
      hasFocus === true ?
      ['focusout', () => setHasFocus(false)] :
      [];
    const [name, fn] = event;

    if (target && fn) {
      target.addEventListener(name, fn);
      return () => target.removeEventListener(name, fn);
    }
  }, [hasFocus])

  return hasFocus;
};

export default useOnFocusChange;