import React from "react";

/**
 * Check if a value is a React element
 * @param {any} elt Element to be tested
 * @returns {boolean}
 * @memberof JS_IsFunctions#
 */
const isReactElement = elt => elt === null || React.isValidElement(elt);

export default isReactElement;