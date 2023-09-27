export default useUpdateTableColumns;
/**
 * Update the columns definitions after a change. Needed for example when using parameters stored in the local storage. When the filters
 * and sort parameters are restored from the local storage the Table component will not take them into account, so we need to
 * apply the parameters "manually" on the columns
 * @param {array} columns Array defining the columns displayed on the Table
 * @param {object} filters Restored from the local storage
 * @param {object} sort Restored from the local storage
 * @returns {array} New array for the columns
 */
declare function useUpdateTableColumns(columns: array, filters: object, sort: object): array;
//# sourceMappingURL=useUpdateTableColumns.d.ts.map