export default getJSClassname;
/**
 * Returns the JS class name associated with the value
 * @param val Value to check explored
 * @returns {string} JS class name
 * @memberof JS_BrowserHelpers#
 * @example
 * getJSClassname('str');                 // => String
 * getJSClassname(12);                    // => Number
 * getJSClassname(document);              // => HTMLDocument
 * getJSClassname(undefined);             // => Undefined
 * getJSClassname(null);                  // => Null
 * getJSClassname(new ExtMap());          // => ExtMap
 */
declare function getJSClassname(val: any): string;
//# sourceMappingURL=getJSClassname.d.ts.map