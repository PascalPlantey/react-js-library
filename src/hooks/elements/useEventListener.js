import { useCallback, useEffect, useRef, useState } from 'react';

import { useOndismount } from '../cycles';

/**
 * @description Fire a function when a document event happens
 * @param {string} name Event name (mouseup, mousemove, ...)
 * @param {function} fn Function to be called on event (receives the event information) (event) => any. This should be a useCallback
 * @param {Element} [elt=window] Document element
 * @param {boolean} [immediately=true] Listen immediately or after toggle()
 * @param {object} [options={}] { capture, once, passive } [see Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { working: boolean, toggle: function() {} }
 * @example
 * const { working, toggle } = useEventListener('mousemove', console.log);
 * @memberof Hooks#
 * @maintenance
 *  . 28/12/2023: changed useOnmount by useEffect to restart listening when listener (startListener) changes
 *  . 29/12/2023: make sure stopListener is called on startListener changes & clear the AbortController in stopListener
 */
const useEventListener = (name, fn, elt = window, immediately = true, options = {}) => {
  const [working, setWorking] = useState(!!immediately);
  const { capture, once, passive } = options;
  const refAbort = useRef();

  const stopListener = useCallback(() => {
    refAbort.current?.abort();                                      // AbortController.abort() remove the listener
    refAbort.current = undefined;
  }, []);

  // Use our own listener to track if it is automatically removed by the browser (options.once === true)
  const listener = useCallback(evt => {
    fn(evt);
    if (once) {
      stopListener();
      setWorking(false);                                            // Listener has been called and eventListener automatically removed
    }
  }, [fn, once]);

  // Use the abort signal to make sure our listener is found back
  const startListener = useCallback(() => {
    stopListener();                                                // Stop listening if it already started
    refAbort.current = new AbortController();
    elt.addEventListener(name, listener, { capture, once, passive, signal: refAbort.current.signal });
  }, [capture, once, passive, elt, listener, name]);

  useEffect(() => {                                                 // (Re)Start listener when it changes
    if (working)
      startListener();
  }, [startListener]);

  useOndismount(stopListener);                                     // Cleanup if still running

  const toggle = useCallback(() => setWorking(running => {
    if (!running) startListener()
    else          stopListener();
    return !running;                                                // Toggle state
  }), [startListener]);

  return({ working, toggle });
};

export default useEventListener;