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
 */
declare function useEventListener(name: string, fn: Function, elt?: Element | undefined, immediately?: boolean | undefined, options?: object | undefined): object;
//# sourceMappingURL=useEventListener.d.ts.map