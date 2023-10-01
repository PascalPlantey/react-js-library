export default useInitializeColumnsFilters;
/**
 * Initializes Table columns' filters
 * @param {array} initialColumns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @returns {array} A new array for the columns (new array so that the Table render is run again)
 * @memberof AntdHooks
 * @notes This should be run only two times: before and after data fetch, so a useMemo does not cost much and saves extra renders
 */
declare function useInitializeColumnsFilters(initialColumns: array, records: array): array;
//# sourceMappingURL=useInitializeColumnsFilters.d.ts.map