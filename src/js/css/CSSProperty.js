import { getHTMLElement } from "../browser";

/**
 * Dynamic access or update of CSS
 */
export default class CSSProperty {
  #property;
  #elt;

  /**
   * Returns a property name in the CSS styling
   * @param {String} name CSS property name
   * @returns {String}
   * @example
   * CSSProperty.toCSSStyleName('fontSize');          // => 'font-size'
   * CSSProperty.toCSSStyleName('font-size');         // => 'font-size'
   */
  static toCSSStyleName(name) {
    let newName = '';

    for(const char of name)
      if (char >= 'A' && char <= 'Z') newName += `-${char.toLowerCase()}`;
      else                            newName += char;

    return newName;
  }

  /**
   * Returns a property name in the JS styling
   * @param {String} name CSS property name
   * @returns {String}
   * @example
   * CSSProperty.toJSStyleName('fontSize');          // => 'fontSize'
   * CSSProperty.toJSStyleName('font-size');         // => 'fontSize'
   */
  static toJSStyleName(name) {
    let nextToUpper = false,
        newName = '';

    for(const char of name)
      if (char === '-') nextToUpper = true;
      else {
        newName += (nextToUpper ? char.toUpperCase() : char);
        nextToUpper = false;
      } 

    return newName;
  }

  /**
   * @param {String} property Property name
   * @param {String|HTMLElement|undefined} [elt] Element which style will be manipulated (document.documentElement by default)
   */
  constructor(name = '', elt = document.documentElement) {
    this.#property = CSSProperty.toCSSStyleName(name);
    this.#elt = getHTMLElement(elt);
    console.assert(this.#elt, `CSSProperty could not find HTML element from ${elt}`);
  }

  set property(name) {
    this.#property = CSSProperty.toCSSStyleName(name);
  }

  /**
   * Returns the value associated to property name
   */
  get value() {
    return getComputedStyle(this.#elt).getPropertyValue(this.#property);
  }

  /**
   * Changes the value associated to property name
   */
  set value(newValue) {
    this.#elt.style.setProperty(this.#property, newValue);
  }
};
