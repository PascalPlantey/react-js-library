import { useState, useLayoutEffect } from "react";
import { getEventTarget } from "../../js";

/**
 * Observes changes to the size of a document element
 * @param {RefObject|string|Element|any} selector Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @param {number} [step=30] Update state if width or height changes more than 'step' pixels
 * @param {object} [options={ box: 'content-box' }] Observer options, { box: 'content-box'|'border-box'|'device-pixel-content-box' }
 * @returns {object} { height: number, width: number }
 * @memberof Hooks#
 */
const useObserveSize = (selector, step = 30, options = { box: 'content-box' }) => {
  const getSize = elt => ({ width: elt?.offsetWidth ?? 0, heigth: elt?.offsetHeight ?? 0 });
  const [size, setSize] = useState(getSize);

  useLayoutEffect(() => {
    const elt = getEventTarget(selector);

    if (elt) {
      const handleResize = () => setSize(prev => {
        const { width: oldWidth, heigth: oldHeight } = prev,
              { width: newWidth, heigth: newHeight } = getSize(elt);

        if (Math.abs(oldWidth - newWidth) >= step || Math.abs(oldHeight - newHeight) >= step)
          return({ width: newWidth, heigth: newHeight });
        else
          return prev;                                    // This should not cause a render, but it seems to render once at least
      });

      const observer = new ResizeObserver(handleResize);
      observer.observe(elt, options);

      return () => observer.disconnect(elt);
    }
  }, [selector, step, options]);

  return size;
};

export default useObserveSize;