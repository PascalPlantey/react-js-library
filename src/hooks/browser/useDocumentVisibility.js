import { useState } from "react";

import useEventListener from "../elements/useEventListener";

const getVisibility = () => ({ visible: document?.visibilityState === 'visible' });

/**
 * Tracks visibility of the browser window
 * @param {boolean} immediately Start tracking immedialtely or when toggle is called?
 * @param {object} [options={}] { capture, once, passive } [see Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { visibility: 'visible'|'hidden', working: boolean, toggle: function() {} }
 * @memberof Hooks#
 */
const useDocumentVisibility = (immediately = true, options = {}) => {
  const [visibility, setVisibility] = useState(getVisibility);    // !!! Function initialization
  const listener = useEventListener('visibilitychange', () => setVisibility(getVisibility()), document, immediately, options);

  return({ ...visibility, ...listener });
};

export default useDocumentVisibility;