import { isPrimitive, isIterable } from "../../../../js/is";
import { useImmediateRunOnDepsChange } from "../../../../hooks";

/**
 * Initializes Table columns 'filters' property. Modifies the columns array, setting the 'filters' property with the values extracted
 * from the records. Thus this should run only two times: before and after data fetch, each time before render.
 * @param {array} initialColumns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @returns {array} A new array for the columns (new array so that the Table render is run again)
 * @memberof AntdHooks
 */
const useInitializeColumnsFilters = (columns, records) => 
  useImmediateRunOnDepsChange(() =>
    columns.forEach(column => {
      const { dataIndex, onFilter, filterInitializer } = column;
      const filtersMap = new Map();                             // Use a Map (better performance than Array) for the filters values

      // Initialize the value on the record if needed, and initialize the filters if needed
      records.forEach(record => {
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

          column.filters = [...filtersMap.values()].sort((a, b) => a.text.localeCompare(b.text));
        }
      });
    }),
    [columns, records]
  );

export default useInitializeColumnsFilters;