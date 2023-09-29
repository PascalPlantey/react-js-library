export default useTreeSelectOptions;
/**
 * Wrapper for buildTreeSelectOptions
 * @param {Array} source Data source
 * @param {boolean} compoundChildren If true the resulting children values will be compounds "parent|child"
 * @returns {Array<Array>} [{ text, value, children: [{ text, value }, ...]}, ...]
 * @memberof AntdHooks
 */
declare function useTreeSelectOptions(source: any[], compoundChildren?: boolean): Array<any[]>;
//# sourceMappingURL=useTreeSelectOptions.d.ts.map