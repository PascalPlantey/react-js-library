export default getFilteredValues;
/**
 * Returns an array of filteredValues. Using the columns definitions, builds an array of the filteredValue property of each column
 * which has the onFilter property. If filteredValue is undefined pushes a null value (instead of undefined) to make sure the returned
 * array is consistent from one call to the other. If the onFilter property goes from not defined to defined (or versa vice) from
 * one call to the other one, the returned array will change.
 * @param {array} columns Table columns definitions
 * @returns {array} The filteredValues
 */
declare function getFilteredValues(columns: array): array;
//# sourceMappingURL=getFilteredValues.d.ts.map