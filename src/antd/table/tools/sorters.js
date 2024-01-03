/**
 * @function sortAlpha
 * @description For the Table columns, function to sort string properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortAlpha = (a, b, index) => a[index].localeCompare(b[index]);

/**
 * @function sortNumbers
 * @description For the Table columns, function to sort number properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortNumbers = (a, b, index) => a[index] - b[index];

/**
 * @function sortDates
 * @description For the Table columns, function to sort number properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortDates = (a, b, index) => a[index] - b[index];

/**
 * @function sortDateStrings
 * @description For the Table columns, function to sort number properties
 * @param {object} a Item to be compared with a property 'index' as a date string
 * @param {object} b Item to be compared with a property 'index' as a date string
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortDateStrings = (a, b, index) => new Date(a[index]) - new Date(b[index]);

/**
 * @function sortBooleans
 * @description For the Table columns, function to sort boolean properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortBooleans = (a, _, index) => a[index] ? -1 : 1;
