export default useEventListener;
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
declare function useEventListener(name: string, fn: Function, elt?: Element | undefined, immediately?: boolean | undefined, options?: object | undefined): object;
//# sourceMappingURL=useEventListener.d.ts.map