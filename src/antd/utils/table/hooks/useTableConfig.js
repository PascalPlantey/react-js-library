import useInitializeTable from "./useInitializeColumnsFilters";
import useUpdateTableColumns from "./useUpdateTableColumns";

/**
 * Initialize parameters for a controlled Table. For a basic Table prefer useInitializeTable. If, for example, the table parameters (filters,
 * sort) are restored from the local storage, updateUpdateTableColumns is also needed; useTableConfig manages the two operations
 * @param {array} columns Definitions for the columns displayed on the Table
 * @param {array} records Data source
 * @param {object} filters Filters to be applied to the columns
 * @param {object} sort Sort order for the columns
 * @returns {array} New value for the Table columns
 * @memberof AntdHooks
 */
const useTableConfig = (columns, records, filters, sort) =>
  useUpdateTableColumns(useInitializeTable(columns, records), filters, sort);

export default useTableConfig;