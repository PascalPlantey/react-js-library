import isString from '../is/isString';

/**
 * Building/Destructuring compound keys. Useful when building a Set or Map to get unique keys
 * @example
 * const compound = Compound.structure('Service cloud', 'Field Service Consultant'); // 'Service Cloud|Field Service Consultant'
 * let cloud, certification;
 * if (Compound.is(compound))
 *   [cloud, certification] = Compound.destructure(compound);                        // ['Service Cloud', 'Field Service Consultant']
 */
class Compound {
  static #regexp = /([^|]+)\|([^|]+)/;

  /**
   * @static
   * @description Is value a compound string?
   * @function is
   * @param {any} value Value to be tested
   * @returns {boolean}
   * @memberof Compound
   */
  static is = value => isString(value) && this.#regexp.test(value);

  /**
   * @static
   * @description Build a compound string from a radical and a key
   * @function structure
   * @param {string} radical First part of compound key
   * @param {string} key Second part of compound key
   * @returns {string} `${radical}|${key}`
   * @memberof Compound
   */
  static structure = (radical, key) => `${radical}|${key}`;

  /**
   * @static
   * @description If value is a Compound string, destructure and return values
   * @function destructure
   * @param {string} value Value is supposed to be a compound value
   * @returns {Array<string>} Array with radical and key, or undefined
   * @memberof Compound
   */
  static destructure = value => {
    if (Compound.is(value)) {
      const match = this.#regexp.exec(value);
      return [match[1], match[2]];
    }
  };
};

export default Compound;