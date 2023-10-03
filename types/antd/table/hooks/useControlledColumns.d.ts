export default useControlledColumns;
/**
 * If the Table is controlled. 1/ initialize with column.filterInitializer and columns.filters; 2/ after user changes updates
 * column.filteredValue and column.sortOrder
 * @param {array} colums Table columns
 * @param {array} records Table datasource
 * @param {object} filters Record filters defined by the Table component (onChange event)
 * @param {object} sort Sort order defined by the Table component (onChange event)
 * @returns {array} Columns initialized and with filteredValue and sortOrder updated
 * @memberof AntdHooks
 */
declare function useControlledColumns(colums: array, records: array, filters: object, sort: object): array;
//# sourceMappingURL=useControlledColumns.d.ts.map