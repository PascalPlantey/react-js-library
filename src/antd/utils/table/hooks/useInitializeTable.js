import { useMemo } from "react";

import { isPrimitive, isIterable } from "../../../../js/is";

/**
 * Initializes Table columns and data when data is available (has been fetched)
 * @param {array} columns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @returns {array} A new array for the columns (new array so that the Table render is run again)
 * @notes This should be run only two times: before and after data fetch, so a useMemo does not cost much
 */
const useInitializeTable = (columns, records) => useMemo(() => {
  // Don't do anything if the records are not available yet
  if (!records || !records.length) return columns;

  return columns.map(column => {
    const { dataIndex, valueInitializer, onFilter, filterInitializer } = column;
    const filtersMap = new Map();                             // Use a Map (better performance than Array) for the filters values

    // Initialize the value on the record if needed, and initialize the filters if needed
    records.forEach(record => {
      // If a valueInitializer is provided, change or add the property; otherwise leave the value as is
      if (valueInitializer)
        record[dataIndex] = valueInitializer(record);

      // If the column has a filter function, initialize the filter values. If filterInitializer is set to 'none', we consider
      // that the 'filters' property of the column is already set
      if (onFilter && filterInitializer !== 'none') {
        const initVal = filterInitializer ? filterInitializer(record) : record[dataIndex].trim();
        let values = [];                                      // Filter values

        // filterInitializer can return an Array or iterable object. Transform primitive types to iterable
        if      (isPrimitive(initVal))  values = [initVal];
        else if (isIterable(initVal))   values = initVal;
        else                            throw new Error(`useInitializeTable: incorrect filter values type: ${typeof initVal}`);

        // Add/Update all filter values available
        for(const value of values)
          filtersMap.set(value, { text: value, value });      // Set new/update potential filters in the map
      }
    });

    if (onFilter && filterInitializer !== 'none')             // Push values as a sorted array
      column.filters = [...filtersMap.values()].sort((a, b) => a.text.localeCompare(b.text));

    return column;
  });
}, [columns, records]);

export default useInitializeTable;