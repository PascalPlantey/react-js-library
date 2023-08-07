/**
 * @description Extensions to JS.Map()
 * @extends Map
 */
class ExtMap extends Map {
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
   *   extmap.getOrSet('Industries', new Set()).add(newIndustry);
   * }
   */
  getOrSet(key, value) {
    if (this.has(key)) value = this.get(key);
    else               this.set(key, value);
    return value;
  }

  /**
   * Map entries as an array [[key, value], ...]
   * @type {Array<Array>}
   */
  get array() {
    return [...this.entries()];
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
};

export default ExtMap;