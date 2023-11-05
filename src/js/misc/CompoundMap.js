import Compound from "./Compound";
import { ExtMap } from "../extensions";

export default class CompoundMap extends ExtMap {
  /**
   * @param {Iterable} [iterable] Items used to initialize the map
   * @param {Function} [fn] Function returning a [key, value] used to set an item in the Map. If not provided
   * each item of iterable is added to the Map; they should be in the form [[...keys], value]
   */
  constructor(iterable, fn) {
    if (!fn) super(iterable);
    else {
      super();
      this.add(iterable, fn);
    }
  }

  /**
   * @param {Iterable} [iterable] Items used to initialize the map
   * @param {Function} [fn] Function returning a [key, value] used to set an item in the Map. If not provided
   * each item of iterable is added to the Map; they should be in the form [[...keys], value]
   */
  add(iterable, fn) {
    for(const item of iterable || []) {
      const [keys, value] = fn ? fn(item) : item;
      this.set(keys, value);
    }
  }

  /**
   * Checks if an item is associated to the ...keys
   * @param {...any} keys
   * @returns {boolean}
   */
  has(...keys) {
    return super.has(Compound.structure(...keys));
  }

  /**
   * Return the value associated to the ...keys
   * @param  {...any} keys 
   * @returns {any}
   */
  get(...keys) {
    return super.get(Compound.structure(...keys));
  }

  /**
   * 
   * @param {Array} keys Keys of the item
   * @param {any} value New value to associate to the keys
   * @returns {CompoundMap} this
   */
  set(keys, value) {
    return super.set(Compound.structure(keys), value);
  }

  /**
   * Deletes the items associated with the ...keys
   * @param  {Array} keys 
   * @returns {boolean} True if an item has been removed from the Map
   */
  delete(...keys) {
    return super.delete(Compound.structure(...keys));
  }

  /**
   * Map entries as an array [[[key1, keys2, ...], value], ...]
   * @get {Array<Array>}
   */
  get array() {
    return [...this.entries()];
  }

  /**
   * Generator for all the (keys / value) pairs of the map
   * @yields {Array<Array<>, any>} [[...keys], value]
   */
  *entries() {
    for(const [keys, value] of super.entries())
      yield [Compound.destructure(keys), value];
  }

  /**
   * Generator for all the keys of the map
   * @yields {Array} [...keys]
   */
  *keys() {
    for(const keys of super.keys())
      yield Compound.destructure(keys);
  }

  /**
   * Generator for all the (keys / value) pairs of the map
   * @yields {Array<Array<>, any>} [[...keys], value]
   */
  *[Symbol.iterator]() {
    for(const [keys, value] of super.entries())
      yield [Compound.destructure(keys), value];
  }

  /**
   * Change the default object type name visible through Object.prototype.toString.call
   * @returns {string} ExtMap
   */
  get [Symbol.toStringTag]() {
    return 'CompoundMap';
  }
};