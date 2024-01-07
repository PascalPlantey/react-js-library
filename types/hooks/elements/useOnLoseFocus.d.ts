export default useOnLoseFocus;
/**
 * Calls a function when the element loses focus
 * @param {Element|String|RefObject} [elt] Target element React.ref or TargetElement or id or query selector
 * @param {Function} fn Function called when elt loses focus
 * @param {Boolean} [hasFocus=true]
 * @returns {Boolean}
 */
declare function useOnLoseFocus(elt?: Element | string | RefObject, fn: Function, hasFocus?: boolean | undefined): boolean;
//# sourceMappingURL=useOnLoseFocus.d.ts.map