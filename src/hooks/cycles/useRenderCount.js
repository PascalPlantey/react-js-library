import { useRef } from "react";

/**
 * Returns the number of renders for the component
 * @returns {number}
 * @example
 * const [obj, setObj] = useState({ a: 1, b: [10, 2] })
 * const [changed, what] = useCheckChanges(obj, obj.values()) // Track changes of obj and its values
 * 
 * useEffect(() => { setObj({ a: 1, b: [12, 3] })}, []) // obj and obj.b did change
 * useEffect(() => { obj.a = 2; setObj(obj); }, [])     // obj.a did change (but no render, [changed, what] not updated)
 */
const useRenderCount = () => {
  const count = useRef(0);
  ++count.current;
  return count.current;
};

export default useRenderCount;