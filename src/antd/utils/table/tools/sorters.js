/**
 * For the Table columns, function to sort string properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortAlpha = (a, b, index) => a[index].localeCompare(b[index]);

/**
 * For the Table columns, function to sort number properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortNumbers = (a, b, index) => a[index] - b[index];

/**
 * For the Table columns, function to sort number properties
 * @param {object} a Item to be compared
 * @param {object} b Item to be compared
 * @param {string} index Property name of 'a' and 'b'
 * @returns {number} < 0, 0 or > 0
 * @memberof AntdUtils
 */
export const sortDates = (a, b, index) => a[index] - b[index];