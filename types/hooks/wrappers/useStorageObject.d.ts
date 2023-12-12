export default useStorageObject;
/**
 * Wraps a useObject in the browser storage
 * @param {string} name Storage value name
 * @param {object|undefined} initial Initial object value
 * @param {boolean} local Local storage is true, session storage otherwise
 * @returns {object} { object, set: object => void, assign: object => void, remove: string|string[] => void, reset: void => void, clear: void => void, render: void => void }
 */
declare function useStorageObject(name: string, initial?: object | undefined, local?: boolean): object;
//# sourceMappingURL=useStorageObject.d.ts.map