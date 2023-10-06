export default class MapOfSet extends ExtMap {
    constructor(iterable: any, fn: any);
    getOrSet(key: any): any;
    add(iterable: any, fn: any): this;
    addWithChildren(iterable: any, mainFn: any, childrenFn: any): this;
    getSortedArray(keySortFn?: ([a]: [any], [b]: [any]) => any, childSortFn?: ([a]: [any], [b]: [any]) => any): any[][];
    get sortedArray(): any[][];
}
import ExtMap from "./ExtMap";
//# sourceMappingURL=MapWithSet.d.ts.map