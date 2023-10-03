export default useFilteredSource;
/**
 * Hook around the getFilteredSource tool, generating a render after execution. Generates a render only if filteredValue of columns
 * are changed or if the records are changed.
 * @param {array} columns Table columns definition
 * @param {array} records Table data source
 * @returns {array} Filtered records
 * @memberof AntdHooks
 */
declare function useFilteredSource(columns: array, records: array): array;
//# sourceMappingURL=useFilteredSource.d.ts.map