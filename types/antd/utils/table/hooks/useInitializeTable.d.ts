export default useInitializeTable;
/**
 * Initializes Table columns and data when data is available (has been fetched)
 * @param {array} columns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @returns {array} A new array for the columns (new array so that the Table render is run again)
 * @notes This should be run only two times: before and after data fetch, so a useMemo does not cost much and saves extra renders
 */
declare function useInitializeTable(columns: array, records: array): array;
//# sourceMappingURL=useInitializeTable.d.ts.map