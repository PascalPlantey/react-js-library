export default initializeColumnsFilters;
/**
 * Initializes Table columns 'filters' property. Modifies the columns array, setting the 'filters' property with the values extracted
 * from the records. Thus this should run only two times: before and after data fetch, each time before render.
 * @param {array} columns Columns configuration for the Table
 * @param {array} records Datasource for the Table
 * @memberof AntdHooks
 */
declare function initializeColumnsFilters(columns: array, records: array): any;
//# sourceMappingURL=initializeColumnsFilters.d.ts.map