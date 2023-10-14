/**
 * @classdesc Manages the read/write/delete of an individual item of the storage (local/session)
 */
class StorageItem {
  #storage
  #key;
  #value;

 /**
   * @param {string} key Storage key
   * @param {Array<any>} [dflt=[]] Default value if key does not exist in the storage ([] if not provided)
   * @param {boolean} [local=true] Local storage if true, session storage otherwise
   */
  constructor(key, dflt = [], local = true) {
    if (!key) throw new Error('LocalStorage: no key provided');

    this.#storage = local ? localStorage : sessionStorage;
    this.#key = key;

    const current = this.#storage.getItem(key);

    if (current === null) this.value = dflt;                        // No previous value, save default one
    else                  this.#value = JSON.parse(current);        // Parse stored value
  }

  /**
   * Key name
   */
  get key() { return this.#key; }

  /**
   * Read/write the stored value
   * @example
   * if (storageItem.value < 0)
   *   storageItem.value = 1;
   */
  get value() { return this.#value; }

  set value(val) {
    this.#value = val;
    this.#storage.setItem(this.#key, JSON.stringify(this.#value));
  }

  /**
   * Deletes the value from the storage. storageItem.value becomes `undefined`
   * @returns {void}
   */
  remove() {
    this.#storage.removeItem(this.#key);
    this.#value = undefined;
  }

  /**
   * Changed the default object type name visible through Object.prototype.toString.call
   * @returns {string}
   */
  get [Symbol.toStringTag]() {
    return 'StorageItem';
  }
};

export default StorageItem;