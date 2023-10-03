/**
 * Indicates if a record matches a filter value for a given property name
 * @param {any} v Filter value
 * @param {object} r Record
 * @param {string} f Record property name
 * @returns {boolean}
 */
export const onStringFilter = (v, r, f) =>
  v.length ?
    r[f].toLowerCase().includes(v.toLowerCase())
  :
    r[f].length === 0;
