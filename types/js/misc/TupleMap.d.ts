export default TupleMap;
/**
 * @description Provides a Tuple based on a Map. Enables a Compound key facilitating the use of elements with a key
 * like ['n1', 'n2'] associated with a value
 * @extends ExtMap
 */
declare class TupleMap extends ExtMap {
    static splitArgs(args: any): any;
    /**
     * Builds a new TupleMap
     * @param {any} iterable (see [Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Map})
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     */
    constructor(iterable: any);
    /**
     * Indicates if the TupleMap own a given key
     * @param  {...any} args Key(s) of the Tuple
     * @returns {boolean}
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * tuples.has(['Cert',' adm']);         // => true
     * tuples.has('Cert',' adm');           // => true
     * tuples.has('Cert','adm');            // => true
     * tuples.has('Cert', 'service');       // => false
     */
    has(...args: any[]): boolean;
    /**
     * Return the value associated with a given key(s)
     * @param  {...any} args Key(s) of the Tuple
     * @returns {any}
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * tuples.get(['Cert',' adm']);         // => 1
     * tuples.has('Cert',' adm');           // => 1
     * tuples.has('Cert', 'service');       // => undefined
     */
    get(...args: any[]): any;
    /**
     * Deletes an element from the TupleMap
     * @param  {...any} args Keys(s) of the Tuple
     * @returns {boolean} True if an element has been deleted
     */
    delete(...args: any[]): boolean;
    /**
     * Get an element from the Tuple if it exists, or add the element to the Tuple with the provided value
     * @param  {...any} args Keys(s) of the Tuple and default value (last argument in the list)
     * @returns {any} Value associated with the key(s)
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * tuples.getOrSet('Cert', 'service', 0);               // ==> 0 Adds the tuple ['Cert', 'service'] with value 0
     * tuples.getOrSet('Cert', 'service', 1);               // ==> 0 Return current value of Tuple ['Cert', 'service']
     * tuples.getOrSet(['Cert', 'service'], 1);             // ==> 0 Return current value of Tuple ['Cert', 'service']
     */
    getOrSet(...args: any[]): any;
    /**
     * Set the value of a Tuple, add the Tuple if it does not exist in the TupleMap
     * @param  {...any} args Keys(s) of the Tuple and default value (last argument in the list)
     * @returns {TupleMap} Current object
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * tuples.set('Cert', 'service', 0);
     * tuples.set('Cert', 'sales', 1);
     * tuples.set(['Cert', 'service'], 1);          // Change value of Tuple ['Cert', 'service']
     */
    set(...args: any[]): TupleMap;
    /**
     * Mimic the Map.forEach() but using destructured keys
     * @param {function} fn Function applied to each Tuple element
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * tuples.tupleForEach((value, key) => console.log('key', key, 'value', value)); // Where key is an array
     */
    tupleForEach(fn: Function): void;
    /**
     * Mimic the Map.keys() but returning destructured keys
     * @generator
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * for(const key of tuples.tupleKeys)
     *   console.log('key', key);              // => logs ['Cert', 'adm'] and ['Cert', 'sales']
     */
    tupleKeys(): Generator<any, void, unknown>;
    /**
     * Mimic the Map.entries() but returning destructured keys
     * @generator
     * @example
     * const tuples = new TupleMap([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
     * for(const [[category, certification], value] of tuples.tupleEntries()) {
         console.log('category', category, 'certification', certification, 'value', value);
     * }
     */
    tupleEntries(): Generator<any[], void, unknown>;
}
import { ExtMap } from "../extensions";
//# sourceMappingURL=TupleMap.d.ts.map