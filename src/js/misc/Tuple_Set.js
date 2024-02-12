import { isIterable, isString } from "../is";

import Tuple_Any from "./Tuple_Any";
import Compound from "./Compound";
import { ExtSet } from "../extensions";

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
  constructor(iterable) {
    if (!isString(iterable) && isIterable(iterable)) {
      const map = new Tuple_Any();

      for(const item of iterable) {
        const [key, value] = [...item];
        map.getOrSet(key, new ExtSet()).set(Compound.structure(value));
      }

      const tuples = [];
      map.forEach((value, key) => tuples.push(key, value));
      super(tuples, true);
    }
    else
      super(iterable);
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
    return super.getOrSet(keys, new ExtSet()).add(value);
  }

  /**
   * Add values from iterable, using function fn to extract the value of each item of the iterable
   * @param {Iterable} items Iterable list of items
   * @param {Function} fn Extractor fn(item) => [keys, value]
   * @returns {Tuple_Set} this
   * @example
   */
  from(items, fn) {
    for(const item of items)
      this.getOrSet(...fn(item));
    return this;
  }

  get array() {
    return super.array.map(([k, v]) => [Compound.destructure(k), v]);
  }

  /**
   * @returns {array} [[[k1, k2, ...][v1, v2, ...]], ...]
   */
  sortedArray() {
    return this.array.map(([c, n]) => [c, [...n].sort()]);
  }

  /**
   * Change the default object type name visible through Object.prototype.toString.call
   * @returns {string} 'Tuple_Set'
   */
  get [Symbol.toStringTag]() {
    return 'Tuple_Set';
  }
}
