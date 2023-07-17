/**
 * Check if document element supports event
 * @param {any} elt Element to be checked
 * @returns {boolean}
 * @memberof JS_BrowserHelpers#
 */
const isEventTarget = elt => elt?.addEventListener;

export default isEventTarget;