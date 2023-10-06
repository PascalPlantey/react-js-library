import { ExtMap } from "../extensions";
import { isIterable, isString } from "../is";
import Compound from "./Compound";

/**
 * @description Provides a Tuple based on a Map. Enables a Compound key facilitating the use of elements with a key
 * like ['n1', 'n2'] associated with a value
 * @extends ExtMap
 */
class Tuple_Any extends ExtMap {
  /**
   * Builds a new Tuple_Any 
   * @param {any} iterable (see [Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Map})
   * @param {boolean} [asIs=false] Absorb iterable "as is", allows children classes to build the data
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   */
  constructor(iterable, asIs = false) {
    if (!isString(iterable) && isIterable(iterable) && !asIs) {
      const tuples = [];

      for(const item of iterable) {
        const [key, value] = [...item];
        tuples.push([Compound.structure(key), value]);
      }

      super(tuples);
    }
    else
      super(iterable);
  }

  /**
   * Indicates if the Tuple_Any own a given key
   * @param  {...any} args Key(s) of the Tuple
   * @returns {boolean}
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * tuples.has(['Cert',' adm']);         // => true
   * tuples.has('Cert',' adm');           // => true
   * tuples.has('Cert','adm');            // => true
   * tuples.has('Cert', 'service');       // => false
   */
  has(...args) {
    return super.has(Compound.structure(args));
  }

  /**
   * Return the value associated with a given key(s)
   * @param  {...any} args Key(s) of the Tuple
   * @returns {any}
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * tuples.get(['Cert',' adm']);         // => 1
   * tuples.has('Cert',' adm');           // => 1
   * tuples.has('Cert', 'service');       // => undefined
   */
  get(...args) {
    return super.get(Compound.structure(args));
  }

  /**
   * Deletes an element from the Tuple_Any
   * @param  {...any} args Keys(s) of the Tuple
   * @returns {boolean} True if an element has been deleted
   */
  delete(...args) {
    return super.delete(Compound.structure(args));
  }

  static splitArgs(args) {
    if (!isString(args) && isIterable(args)) {
      if (args.length > 1)                                // Split arguments return [key(s), value]
        return args.length === 2 ? args : [args.slice(0, -1), args.slice(-1)[0]];
      else if (args.length === 1)
        return [args[0], undefined];
    }
    else
      return [args];                                      // Only one element as argument, forward as key
  }

  /**
   * Get an element from the Tuple if it exists, or add the element to the Tuple with the provided value
   * @param  {...any} args Keys(s) of the Tuple and default value (last argument in the list)
   * @returns {any} Value associated with the key(s)
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * tuples.getOrSet('Cert', 'service', 0);               // ==> 0 Adds the tuple ['Cert', 'service'] with value 0
   * tuples.getOrSet('Cert', 'service', 1);               // ==> 0 Return current value of Tuple ['Cert', 'service']
   * tuples.getOrSet(['Cert', 'service'], 1);             // ==> 0 Return current value of Tuple ['Cert', 'service']
   */
  getOrSet(...args) {
    const [keys, value] = Tuple_Any.splitArgs(args);
    return super.getOrSet(keys, value);
  }

  /**
   * Set the value of a Tuple, add the Tuple if it does not exist in the Tuple_Any
   * @param  {...any} args Keys(s) of the Tuple and default value (last argument in the list)
   * @returns {Tuple_Any} Current object
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * tuples.set('Cert', 'service', 0);
   * tuples.set('Cert', 'sales', 1);
   * tuples.set(['Cert', 'service'], 1);          // Change value of Tuple ['Cert', 'service']
   */
  set(...args) {
    const [keys, value] = Tuple_Any.splitArgs(args)
    return super.set(Compound.structure(keys), value);
  }

  /* Creating tuplesXxxx() functions to avoid disturbing the base Map behavior */

  /**
   * Mimic the Map.forEach() but using destructured keys
   * @param {function} fn Function applied to each Tuple element
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * tuples.tupleForEach((value, key) => console.log('key', key, 'value', value)); // Where key is an array 
   */
  tupleForEach(fn) {
    this.forEach((value, key, map) => fn(value, Compound.destructure(key), map));
  }

  /**
   * Mimic the Map.keys() but returning destructured keys
   * @generator
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * for(const key of tuples.tupleKeys)
   *   console.log('key', key);              // => logs ['Cert', 'adm'] and ['Cert', 'sales']
   */
  *tupleKeys() {
    for(const key of this.keys())
      yield Compound.destructure(key);
  }

  /**
   * Mimic the Map.entries() but returning destructured keys
   * @generator
   * @example
   * const tuples = new Tuple_Any([[['Cert',' adm'], 1], [['Cert', 'sales'], 2]]);
   * for(const [[category, certification], value] of tuples.tupleEntries()) {
       console.log('category', category, 'certification', certification, 'value', value);
   * }
   */
  *tupleEntries() {
    for(const [key, value] of this.entries())
      yield [Compound.destructure(key), value];
  }

  /**
   * Changed the default object type name visible through Object.prototype.toString.call
   * @returns {string}
   */
  get [Symbol.toStringTag]() {
    return 'Tuple_Any';
  }
};

export default Tuple_Any;