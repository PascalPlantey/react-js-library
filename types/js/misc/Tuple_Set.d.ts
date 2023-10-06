/**
 * @description Extensions to Tuple_Any
 * @extends Tuple_Any
 */
export default class Tuple_Set extends Tuple_Any {
    /**
   * Builds a new Tuple_Set
   * @param {any} iterable (see [Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Map})
   * @example
   * const tuples = new Tuple_Set([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   */
    constructor(iterable: any);
    /**
     * Add values from iterable, using function fn to extract the value of each item of the iterable
     * @param {Iterable} items Iterable list of items
     * @param {Function} fn Extractor fn(item) => [keys, value]
     * @returns {Tuple_Set} this
     * @example
     */
    from(items: Iterable<any>, fn: Function): Tuple_Set;
    /**
     * @returns {array} [[[k1, k2, ...][v1, v2, ...]], ...]
     */
    sortedArray(): array;
}
import Tuple_Any from "./Tuple_Any";
//# sourceMappingURL=Tuple_Set.d.ts.map