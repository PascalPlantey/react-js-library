import { useRef, useState } from 'react';

import { useOndismount, useOnmount } from '../cycles';

/**
 * @description Fire a function when a document event happens
 * @param {string} name Event name (mouseup, mousemove, ...)
 * @param {function} fn Function to be called on event (receives the event information) (event) => any
 * @param {Node} [elt=window] Document element
 * @param {boolean} [immediately=true] Listen immediately or after toggle()
 * @param {object} [options={}] { capture, once, passive } [Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { working: boolean, toggle: function() {} }
 * @example
 * const { working, toggle } = useEventListener('mousemove', console.log);
 * @memberof Hooks#
 */
const useEventListener = (name, fn, elt = window, immediately = true, options = {}) => {
  const [working, setWorking] = useState(immediately);
  const { capture, once, passive } = options;
  const refAbort = useRef();

  // Use our own listener to track if it is automatically removed by the browser (options.once === true)
  const listener = evt => {
    fn(evt);
    if (once) setWorking(false);                                    // Listener has been called and eventListener automatically removed
  };

  // Use the abort signal to make sure our listener is found back
  const setListener = () => { 
    refAbort.current = new AbortController();
    elt.addEventListener(name, listener, { capture, once, passive, signal: refAbort.current.signal });
  };

  // AbortController.abort() remove the listener
  const unsetListener = () => refAbort.current?.abort();

  useOnmount(() => immediately && setListener());                   // Start immediately if requested
  useOndismount(() => working && unsetListener());                  // Cleanup if still running

  const toggle = () =>
    setWorking(running => {
      if (!running) setListener()
      else          unsetListener();
      return !running;                                              // Toggle state
    });

  return({ working, toggle });
};

export default useEventListener;