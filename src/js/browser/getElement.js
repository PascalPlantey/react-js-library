import isString from "../is/isString";

/**
 * Tries to find a document element out of elt. Order of tests to get a value: if elt is ...
 * + a string, consider it is an element ID or querySelector  
 * + a useRef object, it's input or the wrapped element  
 * + in all other cases the elt itself  
 * @param {RefObject|string|Element|any} elt Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @returns {Element|undefined} A document element, `undefined` if not found
 * @memberof JS_BrowserHelpers#
 */
const getElement = elt => {
  let foundElt;

  if (isString(elt))
    foundElt = document.getElementById(elt) || document.querySelector(elt);
  else if (elt?.current instanceof Element)
    foundElt = elt.current;
  else
    foundElt = elt;

  return foundElt instanceof Element ? foundElt : undefined;
};

export default getElement;