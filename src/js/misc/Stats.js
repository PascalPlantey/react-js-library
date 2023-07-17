import { isIterable } from "../is";

/**
 * Mean and standard deviation calculations. The class keep all the values added to the serie to be able
 * to calculate the standard deviation
 */
class Stats {
  #serie = [];
  #sum = 0;

  /**
   * Ranks a collection of objects by the given fieldname. The objects are modified
   * @param {Array<any>} data Collection of objects to be ranked
   * @param {string} fieldName Name of the field to be ranked by (object[fieldName] should be a number)
   * @param {string} [rankFieldName='rank'] Name of the ranking field
   * @returns {this} Sorted by fieldName, with a new property named 'rank'
   */
  static rankBy(data, fieldName, rankFieldName) {
    data.sort((item1, item2) => item2[fieldName] - item1[fieldName]).forEach((item, index) => item[rankFieldName] = index + 1);
    return data;
  };

  /**
   * @param {Iterable} [itr=Array] Iterable used to get values
   * @param {function} [callBack] If provided, used to gather values from itr callBack: (item) => number
   */
  constructor(itr = [], callBack) {
    this.add(itr, callBack);
  }

  /**
   * Adds a single value
   * @param {number} value Value to be added
   * @returns {this}
   */
  #addValue(value) {
    this.#serie.push(value);
    this.#sum += value;
    return this;
  }

  /**
   * Add a single or many values to the Stats
   * @param {Iterable<any>} [itr=Array] Value(s) to be added to the Stats
   * @param {function} [callback] Function to extract the values from itr items
   * @returns {this}
   * @example
   *   const data = [{ count: 1 }, { count: 3 }, ...];
   *   const cmpx = [{ x: [{  count: 2 }, { count: 5 }, ...]}, { x: [{ count: 4 }, { count: 3 }, ...]}, ...]
   *   const vals = [5, 8, 3, ...]
   *   new Stats(data, callback) // callback extracts the count values from data one by one 1, 3, ...
   *   new Stats(cpmx, callback) // callback extracts the count values as arrays (ie) [2, 5], [4, 3], ...
   *   new Stats(vals)           // many values from an Iterable
   *   new Stats(5)              // single value
   */
  add(itr = [], callback) {
    if (isIterable(itr)) {                                          // Adding a serie
      if (callback)                                                 // If a callback is provided,
        for(const item of itr)
          this.add(callback(item));                                 // let the callback extract the values
      else                                                          // No callback, should be a serie of values
        for(const item of itr)                                      // to be added to the stats
          this.#addValue(item);
    }
    else
      this.#addValue(itr);                                          // Single value to be added

    return this;
  }

  /**
   * Clears the serie
   * @returns {this}
   */
  reset() {
    this.#serie = [];
    this.#sum = 0;
    return this;
  }

  /**
   * Mean of the serie
   * @type {number}
   */
  get mean() {
    return this.size ? this.sum / this.size : NaN;
  }

  /**
   * Standard deviation for the serie
   * @type {number}
   */
  get stddev() {
    if (!this.size) return NaN;

    const mean = this.mean;
    return Math.sqrt(this.#serie.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / this.size);
  }

  /**
   * Variation coefficient
   * @type {number}
   */
  get variation() {
    if (!this.size) return NaN;
    return this.stddev / this.mean;
  }

  /**
   * Gives the sum of the serie values
   * @type {number}
   */
  get sum() { return this.#sum; }

  /**
   * Gives the size (number of values) of the serie
   * @type {number}
   */
  get size() { return this.#serie.length; }
};

export default Stats;