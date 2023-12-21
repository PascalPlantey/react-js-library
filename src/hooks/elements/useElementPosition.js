import { useRef, useState, useEffect } from "react";

import { getElementPosition, getHTMLElement } from "../../js";

/**
 * Hook to get position and size of an element through an React ref.
 * @param {object|string} [clientRef] React ref or query selector, will create one if not provided
 * @returns {Array} [ref, position] position: { top, left, bottom, right, height, width }, properties can be undefined if render
 * has not been done
 */
const useElementPosition = clientRef => {
  const ref = useRef();
  const current = getHTMLElement(clientRef) ? getHTMLElement(clientRef) : ref.current;
  const [position, setPosition] = useState(() => getElementPosition(current));

  useEffect(() => {
    if (current) {
      const observer = new ResizeObserver(() => setPosition(getElementPosition(current)));
      observer.observe(current);                                      // Start "listening" to change

      return () => observer.unobserve(current);                       // Stop "listening" on unmount
    }
  }, [current]);

  return [clientRef ? clientRef : ref, position];
};

export default useElementPosition;