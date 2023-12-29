import { useRef, useState, useEffect } from "react";

import { getElementPosition, getHTMLElement, isReactRef } from "../../js";
import { useOnmount } from "../cycles";

/**
 * Hook to get position and size of an element through an React ref.
 * @param {object|string} [clientRef] React ref or query selector, will create one if not provided
 * @returns {Array} [ref, position] position: { top, left, bottom, right, height, width }, properties can be undefined if render
 * has not been done
 */
const useElementPosition = clientRef => {
  const ref = useRef();
  const [position, setPosition] = useState(() => getElementPosition(ref.current));

  useOnmount(() => {
    ref.current ??= isReactRef(clientRef) ? clientRef.current : getHTMLElement(clientRef);
  });

  useEffect(() => {
    const { current } = ref;

    if (current) {
      const observer = new ResizeObserver(() => setPosition(getElementPosition(current)));

      observer.observe(current);                                      // Start "listening" to change

      return () => observer.unobserve(current);                       // Stop "listening" on unmount
    }
  }, [ref.current]);

  return [ref, position];
};

export default useElementPosition;