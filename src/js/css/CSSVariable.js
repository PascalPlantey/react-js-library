/**
 * Manipulate (read/write) a CSS variable (defined in :root)
 */
class CSSVariable {
  #name;

  /**
   * @param {string} name
   * @description The name can have the preceding '--' or not
   */
  constructor(name) {
    this.#name = name.startsWith('--') ? name : `--${this.#name}`;
  }

  /**
   * Read/Write the value of CSS variable
   * @example
   * App.css
   * :root {
   *   --app-header-height: 48px;
   * }
   * App.js
   * const variable = new CSSVariable('app-header-height');
   * variable.value = '48em';
   */
  get value() {
    return getComputedStyle(document.documentElement).getPropertyValue(this.#name);
  }

  set value(value) {
    document.documentElement.style.setProperty(this.#name, value);
  }
};

export default CSSVariable;