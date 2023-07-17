export default StorageItem;
/**
 * @classdesc Manages the read/write/delete of an individual item of the storage (local/session)
 */
declare class StorageItem {
    /**
      * @param {string} key Storage key
      * @param {Array<any>} [dflt=Array] Default value if key does not exist in the storage
      * @param {boolean} [local=true] Local storage if true, session storage otherwise
      */
    constructor(key: string, dflt?: any[] | undefined, local?: boolean | undefined);
    set value(arg: any);
    /**
     * Read/write the stored value
     * @example
     * if (storageItem.value < 0)
     *   storageItem.value = 1;
     */
    get value(): any;
    /**
     * Key name
     */
    get key(): string;
    /**
     * Deletes the value from the storage. storageItem.value becomes `undefined`
     * @returns {void}
     */
    remove(): void;
    #private;
}
//# sourceMappingURL=StorageItem.d.ts.map