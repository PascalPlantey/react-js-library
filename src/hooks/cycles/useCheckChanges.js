import { useRef } from "react";

/**
 * Tracks changes in the parameters list from one render to another. Helper to check why a state change/render occurs
 * @param  {...any} values List of parameters
 * @returns {array} [boolean, array] [true, { paramIndex, previousValue, newValue }]
 * @example
 * const [obj, setObj] = useState({ a: 1, b: [10, 2] })
 * const [changed, what] = useCheckChanges(obj, obj.values()) // Track changes of obj and its values
 * 
 * useEffect(() => { setObj({ a: 1, b: [12, 3] })}, []) // obj and obj.b did change
 * useEffect(() => { obj.a = 2; setObj(obj); }, [])     // obj.a did change (but no render, [changed, what] not updated)
 */
const useCheckChanges = (...values) => {
  const previous = useRef(Array.from({ length: values.length }, (_, i) => values[i]));

  console.assert(previous.current.length === values.length, `The number of parameters should not change: ${previous.current.join(', ')} to${values.join(', ')}`);

  const diffs = [];

  for(let i = 0; i < values.length; ++i) {
    const prev = previous.current[i],
          next = values[i];

    if (prev !== next) {
      previous.current[i] = next;
      diffs.push({ paramIndex: i, previousValue: prev, newValue: next });
    }
  }

  return [diffs.length > 0, diffs];
};

export default useCheckChanges;