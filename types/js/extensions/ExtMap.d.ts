export default ExtMap;
/**
 * @description Extensions to JS.Map()
 * @extends Map
 */
declare class ExtMap extends Map<any, any> {
    constructor();
    constructor(entries?: readonly (readonly [any, any])[] | null | undefined);
    constructor();
    constructor(iterable?: Iterable<readonly [any, any]> | null | undefined);
    /**
     * Adds the key/value in the map or retrieve the current value associated with the given key
     * @param {any} key Key to retrieve the element
     * @param {any} value Default value if the key is not found in the Map
     * @returns {any} value associated with the given key
     * @example
     * const addIndustry = (newIndustry, map) => {      // Standard Map
     *   let set = map.get('Industries');
     *   if (set === undefined) {
     *     set = new Set();
     *     map.set('Industries', set);
     *   }
     *   set.add(newIndustry);
     * }
     * @example
     * const addIndustry = (newIndustry, extmap) => {   // ExtMap
     *   extmap.hasOrSet('Industries', new Set()).add(newIndustry);
     * }
     */
    hasOrSet(key: any, value: any): any;
    /**
     * Map entries as an array [[key, value], ...]
     * @type {Array<Array>}
     */
    get array(): any[][];
    /**
     * Returns ExtMap as a sorted array [[k, v], [k, v], ...]
     * @param {function} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default
     */
    sortedArray(sortFn?: Function | undefined): any[][];
    /**
     * Return a new ExtMap sorted
     * @param {function} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default
     */
    sorted(sortFn?: Function | undefined): ExtMap;
    /**
     * Returns the map as an array of Objects
     * @param {string} [keyName='key'] Name to use for the key property
     * @param {string} [valueName='value'] Name to use for the value property
     * @param {function|null|undefined} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default or no sort if null
     * @returns {Array} Array [{ `keyName`: k, `valueName`: v }, ...] sorted by `keyName`
     */
    objectsArray(keyName?: string | undefined, valueName?: string | undefined, sortFn?: Function | null | undefined): any[];
}
//# sourceMappingURL=ExtMap.d.ts.map