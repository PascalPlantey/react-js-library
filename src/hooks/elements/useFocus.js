import { useState, useEffect, useRef } from 'react';

/**
 * Hook to be informed when an event target receives or loses focus
 * @returns {Array} [focus: boolean, setFocus(on: boolean): void, eltRef]
 * @memberof Hooks#
 * @example
 * const [focus, setFocus, eltRef] = useFocus();
 * return <input type='text' ref={eltRef} />
 */
const useFocus = () => {
  const [focus, innerSetFocus] = useState(false);
  const ref = useRef();

  // Helper: is ref the currently focused element?
  const isCurrentActive = () => document.activeElement === ref.current;

  // Change the target element focus state if needed
  const setFocus = on => on ? (!isCurrentActive() && ref.current.focus()) : (isCurrentActive() && ref.current.blur());

  const onFocus = () => innerSetFocus(true);              // Functions used on event
  const onBlur = () => innerSetFocus(false);

  // Initiliaze the current state. This is separated from the other effect to avoid a double state update when the element
  // becomes active the first time
  useEffect(() => {
    if (ref?.current && ref?.current.addEventListener && isCurrentActive())
      innerSetFocus(true);
  }, []);

  // Set the event listeners to update focus state after active element status changes
  useEffect(() => {
    const current = ref?.current;

    if (current && current.addEventListener) {
      current.addEventListener('focus', onFocus);         // Be informed when focus changes
      current.addEventListener('blur', onBlur);

      return(() => {                                      // Cleanup
        current.removeEventListener('focus', onFocus);
        current.removeEventListener('blur', onBlur);
      });
    }
    else
      console.warn('useFocus: no target element; did you forget to use the ref?')

  // If the component is hidden and shown again we need to update the effect, so current is added in the dependecy list,
  // which eslint does not like
  // eslint-disable-next-line
  }, [ref?.current]);

  return [focus, setFocus, ref];
};

export default useFocus;