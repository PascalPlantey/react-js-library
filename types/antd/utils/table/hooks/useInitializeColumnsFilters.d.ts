export default useInitializeColumnsFilters;
/**
 * Initializes Table columns 'filters' property. Modifies the columns array, setting the 'filters' property with the values extracted
 * from the records. Thus this should run only two times: before and after data fetch, each time before render.
 * @param {array} initialColumns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @returns {array} A new array for the columns (new array so that the Table render is run again)
 * @memberof AntdHooks
 */
declare function useInitializeColumnsFilters(columns: any, records: array): array;
//# sourceMappingURL=useInitializeColumnsFilters.d.ts.map