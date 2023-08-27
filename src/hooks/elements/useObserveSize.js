import { useState, useEffect } from "react";

import { getEventTarget } from "../../js";

/**
 * Observes changes to the size of a document element
 * @param {React.MutableRefObject|string|Element} selector Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @param {number} [step=30] Update state if width or height changes more than 'step' pixels
 * @param {string} [box='content-box'] Observer options, 'content-box'|'border-box'|'device-pixel-content-box' ([see Mozilla]{@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe})
 * @returns {object} { height: number, width: number }
 * @memberof Hooks#
 */
const useObserveSize = (selector, step = 30, box = 'content-box') => {
  const getSize = elt => ({ width: elt?.offsetWidth, heigth: elt?.offsetHeight });
  const [size, setSize] = useState(getSize);

  // Strange: if we use 'useLayoutEffect' (which sounds logical) we get a render with size(0, 0) on an img and 
  // the real size in a following effect. By using 'useEffect' the img has been rendered and we don't get this (0, 0) size
  useEffect(() => {
    const elt = getEventTarget(selector);

    if (elt) {
      const handleResize = () => setSize(prev => {
        const { width: oldWidth, heigth: oldHeight } = prev,
              { width: newWidth, heigth: newHeight } = getSize(elt);

        if (oldWidth === undefined || Math.abs(oldWidth - newWidth) >= step || Math.abs(oldHeight - newHeight) >= step)
          return({ width: newWidth, heigth: newHeight });
        else
          return prev;                                    // This should not cause a render, but it seems to render at least once
      });

      const observer = new ResizeObserver(handleResize);
      observer.observe(elt, { box });

      return () => observer.disconnect(elt);
    }
  }, [selector, step, box]);

  return size;
};

export default useObserveSize;