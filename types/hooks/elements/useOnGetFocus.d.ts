export default useOnGetFocus;
/**
 * Calls a function when the element gets focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=false]
 * @returns {Boolean}
 */
declare function useOnGetFocus(elt?: Element | string | RefObject, fn: Function, hasFocus?: boolean | undefined): boolean;
//# sourceMappingURL=useOnGetFocus.d.ts.map