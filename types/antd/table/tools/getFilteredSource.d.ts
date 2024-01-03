export default getFilteredSource;
/**
 * Applies the filters defined in the columns to the records. The columns must be "controlled" (see useUpdateTableColumns) or
 * static in order to provide the "filteredValue" property
 * @param {array} columns Columns with filteredValue property set to the filters to be applied
 * @param {array} records Datasource records to be filtered
 * @returns {array} Array of records filtered
 * @memberof AntdUtils
 */
declare function getFilteredSource(columns: array, records: array): array;
//# sourceMappingURL=getFilteredSource.d.ts.map