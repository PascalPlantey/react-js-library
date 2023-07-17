export default useStorageItem;
/**
 * Hook around the browser storage
 * @param {string} name Key name
 * @param {any} [def=''] Default value if key does not exist in storage
 * @param {boolean} [local=true] Use localStorage if true, sessionStorage otherwise
 * @returns {Array} [value, setValue]
 * @memberof Hooks#
 */
declare function useStorageItem(name: string, def?: any, local?: boolean | undefined): any[];
//# sourceMappingURL=useStorageItem.d.ts.map