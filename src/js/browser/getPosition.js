import { isReactRef } from "../is";

/**
 * Retrieve the position and size of a DOM element
 * @param {DOMElement} el
 * @returns {object} { top, left, bottom, right, height, width } Properties are undefined if el is not set
 */
export const getElementPosition = el => {
  let left, top,
      height = el?.clientHeight,
      width = el?.clientWidth;

  for(left = top = 0; el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop); el = el.offsetParent) {
    left += el.offsetLeft - el.scrollLeft;
    top += el.offsetTop - el.scrollTop;
  }

  return { top, left, height, width, bottom: top ? top + height : undefined, right: left ? left + width : undefined };
};

export const getRefPosition = ref => getElementPosition(isReactRef(ref) ? ref.current : ref);
