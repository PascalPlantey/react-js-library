export default ItemsCounters;
/**
 * Counts the occurences items found in an iterable Object
 * @extends Map
 */
declare class ItemsCounters extends Map<any, any> {
    /**
     * Builds an ItemsCounter in many different ways (see `ItemsCounter.AddCounts` examples)
     * @param {Iterable|object} [itr=[]] Object or Collection of objects or undefined (defaults to [])
     * @param {function} [callback] Function returning key/value pairs to be added [[k, v], [k, v]]
     */
    constructor(itr?: object | Iterable<any> | undefined, callback?: Function | undefined);
    /**
     * Add counts to an ItemsCounter in many different ways. `itr` can be a Map with pairs of key/number,
     * thus can copy an ItemsCounter, allowing the constructor to copy/construct an ItemsCounter
     * @param {Iterable} [itr=[]] Object or Collection of objects or undefined (defaults to [])
     * @param {function} [callback] Function returning key/count pairs to be added [[k, c], [k, c]] or [[k1], [k2], ...] or [k1, k2, ...]
     * @returns {this}
     * @example
     * new ItemsCounter("abcdedfde");                               // => Counts letters
     * new ItemsCounter(['blue', 'blue', 'red'])                    // => Counts occurences of colors
     * new ItemsCounter(['a', 2], ['a', 5], ['b', 3])               // => Counts of 'a' and 'b'
     * new ItemsCounter([{ name: 'a', count: 5 }, { name: 'a', count: 2 }], ({ name, count }) => [[name, count]]) // => Occurences in objects
     */
    addCounts(itr?: Iterable<any> | undefined, callback?: Function | undefined): this;
    /**
     * Adds a count of occurences of an item in the counter
     * @param {any} item Item to be added
     * @param {number} [count=1] Occurences to add
     * @returns {this}
     */
    addCount(item: any, count?: number | undefined): this;
    /**
     * Returns an array of the key/counts of the ItemsObject
     * @returns {Array<Array>} The entries as an array in the form [[k, c], [k, c], ...]
     */
    toArray(): Array<any[]>;
    /**
     * Sum of the counts in the ItemsCounter
     * @type {number}
     */
    get totalCount(): number;
    /**
     * @generator
     * @description An iterator over the percentages of occurences of each item. Each element
     * iterated is in the form [key, count, percentage]
     * @param {number} [digits=2] Number of digits for the percentage results
     * @yields {Array} [key, count, percentage]
     */
    percentages(digits?: number | undefined): Generator<any[], void, unknown>;
    /**
     * @generator
     * @description An iterator transforming each key/count in the form { keyName: k, countName: c }
     * @param {string} [keyName='key'] Name to be used for the key property in the returned object
     * @param {string} [countName='count'] Name to be used for the count property in the returned object
     * @param {boolean} [withPercent=false] Include the percentage of occurences?
     * @param {string} [percentName='percentage'] Name to be used for the percentage property in the returned object
     * @param {number} [digits=2] Number of digits for the percentages
     * @yields {object} { keyName: k, countName: c } or { keyName: k, countName: c, percentName: p }
     */
    objects(keyName?: string | undefined, countName?: string | undefined, withPercent?: boolean | undefined, percentName?: string | undefined, digits?: number | undefined): Generator<{
        [x: string]: any;
    }, void, unknown>;
    /**
     * Returns an array from the ItemsCounter
     * @param {string} [keyName='key'] Name to be used for the key property in the returned object
     * @param {string} [countName='count'] Name to be used for the count property in the returned object
     * @param {boolean} [withPercent=false] Include the percentage of occurences?
     * @param {string} [percentName='percentage'] Name to be used for the percentage property in the returned object
     * @param {number} [digits=2] Number of digits for the percentages
     * @returns {Array} [{ keyName: k, countName: c }, ...] or [{ keyName: k, countName: c, percentName: p }, ...]
     */
    toObjectsArray(keyName?: string | undefined, countName?: string | undefined, withPercent?: boolean | undefined, percentName?: string | undefined, digits?: number | undefined): any[];
    /**
     * Modifies the ItemsCounter, sorting the items with the sort function provided
     * @param {function} func Sort function to be used ([k, c], [k, c]) => number (see [Mozilla]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort})
     * @returns {this}
     */
    sort(func: Function): this;
    /**
     * Sorts the ItemsCounter object ascending or descending
     * @param {boolean} [ascending=false] Sort order
     * @returns {this}
     */
    sortByCount(ascending?: boolean | undefined): this;
    /**
     * Group the items which percentages are under the number provided (the ItemsCounter is modified)
     * @param {number} [number=5] Percentage under (<=) which the item is removed and grouped
     * @param {string} [sep='; '] Separator to be used when concatening the keys for the new item containing grouped values
     * @param {string} [radical='Others: '] Radical key
     * @returns {this}
     */
    groupLowerThan(number?: number | undefined, sep?: string | undefined, radical?: string | undefined): this;
    /**
     * Finds the grouped label if any
     * @param {string} [radical='Others: '] Radical used to build the grouped name
     * @returns {string|undefined} The grouped label
     */
    groupedLabel(radical?: string | undefined): string | undefined;
    /**
     * Returns true if this has a grouped label
     * @param {string} [radical='Others: ' Radical used to build the grouped name
     * @returns {boolean}
     */
    hasGroupedLabel(radical?: string | undefined): boolean;
    /**
     * Returns the key/value pairs of the grouped label or empty array if there is no grouped label
     * @param {string} [radical='Others: '] Radical used to build the grouped name
     * @returns {Array} [[label, count], [label, count], ...]
     */
    unstructuredGroup(radical?: string | undefined): any[];
    #private;
}
//# sourceMappingURL=ItemsCounter.d.ts.map