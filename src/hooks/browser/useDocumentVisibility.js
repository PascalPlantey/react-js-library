import { useCallback, useState } from "react";

import useEventListener from "../elements/useEventListener";

const getVisibility = () => document?.visibilityState === 'visible';

/**
 * Tracks visibility of the browser window
 * @param {boolean} immediately Start tracking immedialtely or when toggle is called?
 * @param {object} [options={}] { capture, once, passive } [see Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { visible: boolean, working: boolean, toggle: function() {} }
 * @memberof Hooks#
 */
const useDocumentVisibility = (immediately = true, options = {}) => {
  const [visible, setVisible] = useState(getVisibility);    // !!! Function initialization
  const listener = useEventListener('visibilitychange', useCallback(() => setVisible(getVisibility()), []), document, immediately, options);

  return({ visible, ...listener });
};

/* for use with useCheckHook -----------------------------------------------*
  const resultDesc = {
    type: 'object',
    values: [
      { name: 'visible', type: 'boolean' },
      { name: 'working', type: 'boolean' },
      { name: 'toggle', type: 'function' }
    ]
  };
  const res = useCheckHook('hook', useDocumentVisibility, resultDesc, step);
 */

export default useDocumentVisibility;
