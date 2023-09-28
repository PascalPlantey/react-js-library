/**
 * Extensions to the string class
 */
class ExtString {
  /**
   * Adds the "extend" function to String
   * @param {string} str Current value of the string
   * @param {string} add String to be added to the original string
   * @param {string} [delimiter='; '] Delimiter to be used between the original string and str, if the original string is empty
   * @param {string} [radical=''] String to use as a radical if the original string is empty
   * @returns {string} A new string
   * @example
   * let str = '';
   * for(const category of ['police', 'horror', 'suspense'])
   *   str = ExtString.extend(str, category, '; ', 'Categories: ');
   * console.log(str);          // 'Categories: police; horror; suspense'
   */
  static extend(str, add, delimiter = '; ', radical = '') {
    if (add.length === 0)
      return str.length ? str : radical;
    else
      return str.concat(str.length ? delimiter : radical, add);
  };

  /**
   * Changed the default object type name visible through Object.prototype.toString.call
   * @returns {string}
   */
  get [Symbol.toStringTag]() {
    return 'ExtString';
  }
};


export default ExtString;