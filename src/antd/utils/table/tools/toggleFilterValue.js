import { isPrimitive } from "../../../../js";

/**
 * Toggle on/off a value for a filter keyName in the filters
 * @param {array} filters 
 * @param {string} keyName Property to be toggled
 * @param {any} value A single value or an iterator over many values
 * @returns {Array} New filters
 * @memberof AntdUtils
 */
export const toggleFilterValue = (filters, keyName, value) => {
  const values = isPrimitive(value) ? [value] : value;
  let filterValues = filters?.[keyName];                                          // Array of current values for filters[keyName] if exists
  let newFilters;                                                                 // New filters to be built

  for(const val of values) {
    if (filterValues) {                                                           // keyName already has filter values, add or remove the value
      if (filterValues.includes(val)) filterValues = filterValues.filter(filter => filter !== val);
      else                            filterValues = [val, ...filterValues];
    }
    else                              filterValues = [val];                       // keyName is not there or with no filter values, build the values

    const newFilter = { [keyName]: filterValues.length ? filterValues : null };   // New item to be set in filters

    if (filters)                      newFilters = { ...filters, ...newFilter };  // Change the filter to the current one(s)
    else                              newFilters = { ...newFilter };              // Create the filters
  }

  return newFilters;
};

export default toggleFilterValue;