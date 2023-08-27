import isString from "../is/isString";
import isEventTarget from './isEventTarget'

/**
 * Tries to find a target element out of elt. Get a value from element (see below) and check if it
 * supports events or not. Displays a console warning is no event target can be found. Order of tests
 * to get a value: if elt is ...
 * + a string, consider it is an element ID or querySelector  
 * + a useRef object, it's input or the wrapped element  
 * + in all other cases the elt itself  
 * @param {RefObject|string|Element|any} elt Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @returns {Object|undefined} A target element with event listener support, `undefined` if not found
 * @memberof JS_BrowserHelpers#
 */
const getEventTarget = elt => {
  let targetElt;

  if (isString(elt))
    targetElt = document.getElementById(elt) || document.querySelector(elt);
  else if (elt?.current instanceof Element)
    targetElt = elt.current?.input || elt.current
  else
    targetElt = elt;

  return isEventTarget(targetElt) ? targetElt : undefined;
};

export default getEventTarget;