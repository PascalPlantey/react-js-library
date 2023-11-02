/**
 * Execute a function after x ms, unless called again before x ms
 * @param {Function} func Function to be executed
 * @param {number} [timeout=500] Delay before execution
 * @returns {void}
 * @example
 * const handleInput = debounce(e => console.log('input', e?.target?.value));
 * <input onChange={handleInput} />
 * @example
 * const [value, setValue] = useState();
 * console.log('value', value)
 * const debouncerRef = useRef(debounce(e => console.log('e', e)));
 *
 * const handleChange = e => {
 *   setValue(e.target.value);
 *   debouncerRef.current(e);
 * };
 *
 * return <input onChange={handleChange} />;
 */
export const debounce = (func, timeout = 500) => {
  let timer;

  return (...args) => {                               // Get func arguments
    clearTimeout(timer);                              // Clear previous timer if set
    timer = setTimeout(() => func(args), timeout);
  };
};

/**
 * Execute a function immediately and wait timeout ms before any new run
 * @param {Function} func Function to be executed
 * @param {number} [timeout=500] Delay after execution
 * @returns {void}
 */
export const debounce_leading = (func, timeout = 500) => {
  let timer;

  return (...args) => {
    if (!timer)                                           // If no timer func has not been executed at least once
      func(args);
    clearTimeout(timer);
    timer = setTimeout(() => timer = undefined, timeout); // Do not run again until timeout ms
  };
};