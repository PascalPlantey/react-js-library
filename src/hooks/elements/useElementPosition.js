import { useRef, useState, useEffect } from "react";

import { getElementPosition } from "../../js";

/**
 * Hook to get position and size of an element through an React ref.
 * @param {object} [clientRef] React ref, will create one if not provided
 * @returns {Array} [ref, position] position: { top, left, bottom, right, height, width }, properties can be undefined if render
 * has not been done
 */
const useElementPosition = clientRef => {
  const ref = useRef();
  const { current } = clientRef ? clientRef : ref;
  const [position, setPosition] = useState(() => getElementPosition(current));

  useEffect(() => {
    const { current } = clientRef ? clientRef : ref;
    const observer = new ResizeObserver(() => setPosition(getElementPosition(current)));

    current && observer.observe(current);

    return () => current && observer.unobserve(current);
  }, [clientRef, clientRef?.current]); // eslint-disable-line

  return [clientRef ? clientRef : ref, position];
};

export default useElementPosition;