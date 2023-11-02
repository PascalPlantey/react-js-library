import { isFunction } from "../is";

/**
 * @description Extensions to JS.Map()
 * @extends Map
 */
class ExtMap extends Map {
  /**
   * Adds the key/value in the map or retrieve the current value associated with the given key
   * @param {any} key Key to retrieve the element
   * @param {function|any} value Default value if the key is not found in the Map
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
   *   extmap.getOrSet('Industries', () => new Set()).add(newIndustry);
   * }
   */
  getOrSet(key, value) {
    let result;

    if (this.has(key))
      result = this.get(key);
    else {
      result = isFunction(value) ? value() : value
      this.set(key, result);
    }

    return result;
  }

  /**
   * Update a pair; the update function return the value to be saved with the key
   * @param {any} key Key for the Map
   * @param {function} update Function receiving current value for key which return value is saved with the key
   * @return {ExtMap} Current ExtMap object
   */
  setByFn(key, fn) {
    return this.set(key, fn(this.get(key)));
  }

  /**
   * Update or insert a new pair; the update/insert functions return the value to be saved with the key
   * @param {any} key Key for the Map
   * @param {function} insert Function whith no parameters which return value is saved with the key
   * @param {function} update Function receiving current value for key which return value is saved with the key
   * @return {ExtMap} Current ExtMap object
   * @example
   * const map = new ExtMap();
   * const insert = () => 1;
   * const update = value => value + 1;
   * map.upsert('bananas', insert, update);           // 'bananas' => 1
   * map.upsert('bananas', insert, update);           // 'bananas' => 2
   */
  upsertByFn(key, insert, update) {
    return this.has(key) ? this.setByFn(key, update) : this.setByFn(key, insert);
  }

  /**
   * Map entries as an array [[key, value], ...]
   * @type {Array<Array>}
   */
  get array() {
    return [...super.entries()];
  }

  /**
   * Returns ExtMap as a sorted array [[k, v], [k, v], ...]
   * @param {function} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default
   */
  sortedArray(sortFn = ([a], [b]) => a.localeCompare(b)) {
    return this.array.sort(sortFn);
  }

  /**
   * Return a new ExtMap sorted
   * @param {function} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default
   */
  sorted(sortFn) {
    return new ExtMap(this.sortedArray(sortFn));
  }

  /**
   * Returns the map as an array of Objects
   * @param {string} [keyName='key'] Name to use for the key property
   * @param {string} [valueName='value'] Name to use for the value property
   * @param {function|null|undefined} [sortFn=([a], [b]) => a.localeCompare(b)] Sort function, sorting by key by default or no sort if null
   * @returns {Array} Array [{ `keyName`: k, `valueName`: v }, ...] sorted by `keyName`
   */
  objectsArray(keyName = 'key', valueName = 'value', sortFn = ([a], [b]) => a.localeCompare(b)) {
    const array = sortFn ? this.array.sort(sortFn) : this.array;
    return array.map(([ a, b ]) => ({ [keyName]: a, [valueName]: b }));
  }

  /**
   * Change the default object type name visible through Object.prototype.toString.call
   * @returns {string} ExtMap
   */
  get [Symbol.toStringTag]() {
    return 'ExtMap';
  }
};

export default ExtMap;