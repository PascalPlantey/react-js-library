export default class ExtSet extends Set<any> {
    constructor(values?: readonly any[] | null | undefined);
    constructor(iterable?: Iterable<any> | null | undefined);
    /**
     * Add one or many value to the Set. If value is a primitive type or non iterable object it is added as is, otherwise (Iterable)
     * all items are added to the Set
     * @param {Iterable} value To be added to the Set
     * @returns {Set} this
     */
    addIterable(values: any): Set<any>;
    /**
     * Set entries as an array [v1, v2, ...]
     * @type {array}
     */
    get array(): array;
    /**
     * Returns ExtSet as a sorted array [v1, v2, ...]
     * @param {function} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default
     * @return {array}
     */
    sortedArray(sortFn?: Function | undefined): array;
}
//# sourceMappingURL=ExtSet.d.ts.map