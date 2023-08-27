import { useState } from "react";

import useEventListener from "../elements/useEventListener";

/**
 * Tracks visibility of the browser window
 * @param {boolean} immediately Start tracking immedialtely or when toggle is called?
 * @param {object} [options={}] { capture, once, passive } [see Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { visibility: 'visible'|'hidden', working: boolean, toggle: function() {} }
 * @memberof Hooks#
 */
const useDocumentVisibility = (immediately = true, options = {}) => {
  const [visibility, setVisibility] = useState(document?.visibilityState);

  const handleVisibilityChange = () => setVisibility(document?.visibilityState);

  return ({
    visibility,
    ...useEventListener('visibilitychange', handleVisibilityChange, document, immediately, options)
  });
};

export default useDocumentVisibility;