export default getEventTarget;
/**
 * Tries to find a target element out of elt. Get a value from element (see below) and check if it
 * supports events or not. Order of tests to get a value: if elt is ...
 * + a string, consider it is an element ID or querySelector
 * + a useRef object, it's input or the wrapped element
 * + in all other cases the elt itself
 * @param {RefObject|string|Element|any} elt Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @returns {Object|undefined} A target element with event listener support, `undefined` if not found
 * @memberof JS_BrowserHelpers#
 */
declare function getEventTarget(elt: RefObject | string | Element | any): Object | undefined;
//# sourceMappingURL=getEventTarget.d.ts.map