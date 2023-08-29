import { useCallback, useState } from 'react';

import useEventListener from '../elements/useEventListener';

/**
 * @description Hook to get alerted when the window size changes
 * @param {number} [step=30] Number of px in change after which the state will be updated
 * @param {boolean} [immediately=true] Start listening immediately (true by default)
 * @returns {useWindowSizeResult} {@link useWindowSizeResult}
 * @example const { height, width, working, toggle } = useWindowSize(step, immediately)
 * @memberof Hooks#
 */
const useWindowSize = (step = 30, immediately = true) => {
  const makeSize = () => ({ width: window.innerWidth, height: window.innerHeight });
  const [size, setSize] = useState(makeSize());
  const { height, width } = size;

  const onResize = useCallback(() => setSize(current => {
    const { height, width } = current;
    if (Math.abs(window.innerWidth - width) >= step || Math.abs(window.innerHeight - height) >= step)
      return makeSize();
    else
      return current;                                               // Unchanged ==> no state change ==> no render
  }), [step]);

  const { working, toggle } = useEventListener('resize', onResize, window, immediately);

  const handleToggle = useCallback(() => {
    setSize(makeSize);                                              // Get initial size before activating the listener
    toggle();
  }, [toggle]);

  return ({ height, width, working, toggle: handleToggle });
};

export default useWindowSize;