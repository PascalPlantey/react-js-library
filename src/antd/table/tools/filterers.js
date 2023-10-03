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

/**
 * Indicates if a record matches a filter value for a given property name. The record property is supposed to be an array of strings
 * @param {any} v Filter value
 * @param {object} r Record
 * @param {string} f Record property name
 * @returns {boolean}
 */
export const onArrayFilter = (v, r, f) => {
  if (v.length === 0)
    return r[f].length === 0;
  else
    for(const value of r[f])
      if (value.toLowerCase() === v.toLowerCase())
        return true;
  return false;
}