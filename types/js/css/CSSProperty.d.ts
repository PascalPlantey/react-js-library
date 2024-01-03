/**
 * Dynamic access or update of CSS
 */
export default class CSSProperty {
    /**
     * Returns a property name in the CSS styling
     * @param {String} name CSS property name
     * @returns {String}
     * @example
     * CSSProperty.toCSSStyleName('fontSize');          // => 'font-size'
     * CSSProperty.toCSSStyleName('font-size');         // => 'font-size'
     */
    static toCSSStyleName(name: string): string;
    /**
     * Returns a property name in the JS styling
     * @param {String} name CSS property name
     * @returns {String}
     * @example
     * CSSProperty.toJSStyleName('fontSize');          // => 'fontSize'
     * CSSProperty.toJSStyleName('font-size');         // => 'fontSize'
     */
    static toJSStyleName(name: string): string;
    /**
     * @param {String} property Property name
     * @param {String|HTMLElement|undefined} [elt] Element which style will be manipulated (document.documentElement by default)
     */
    constructor(name?: string, elt?: string | HTMLElement | undefined);
    set property(arg: any);
    /**
     * Changes the value associated to property name
     */
    set value(arg: string);
    /**
     * Returns the value associated to property name
     */
    get value(): string;
    #private;
}
//# sourceMappingURL=CSSProperty.d.ts.map