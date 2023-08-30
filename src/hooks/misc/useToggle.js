import { useCallback, useState } from 'react';

/**
 * Toggle hook, can be used to force a render to execute
 * @param {boolean} [initial=false] Initial toggle value
 * @returns {Array} [value: boolean, toggle: function]
 * @memberof Hooks#
 * @example
 * const [visible, toggleShow] = useToggle(true);
 * return(
 *   <>
 *     {visible && 'Message is visible'}
 *     <button onClick={toggleShow}>{visible ? 'Hide' : 'Show'}</button>
 *   </>
 * )
 */
const useToggle = (initial = false) => {
  const [value, toggle] = useState(!!initial);

  return [value, useCallback(() => toggle(prevState => !prevState), [])];
};

export default useToggle;