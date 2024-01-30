import { useRef } from "react";

/**
 * Returns the number of renders for the component
 * @returns {number}
 */
const useRenderCount = () => {
  const count = useRef(0);
  ++count.current;
  return count.current;
};

export default useRenderCount;