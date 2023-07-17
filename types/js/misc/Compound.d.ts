export default Compound;
/**
 * Building/Destructuring compound keys. Useful when building a Set or Map to get unique keys
 * @example
 * const compound = Compound.structure('Service cloud', 'Field Service Consultant'); // 'Service Cloud|Field Service Consultant'
 * let cloud, certification;
 * if (Compound.is(compound))
 *   [cloud, certification] = Compound.destructure(compound);                        // ['Service Cloud', 'Field Service Consultant']
 */
declare class Compound {
    static "__#3@#regexp": RegExp;
    /**
     * @static
     * @description Is value a compound string?
     * @function is
     * @param {any} value Value to be tested
     * @returns {boolean}
     * @memberof Compound
     */
    static is: (value: any) => boolean;
    /**
     * @static
     * @description Build a compound string from a radical and a key
     * @function structure
     * @param {string} radical First part of compound key
     * @param {string} key Second part of compound key
     * @returns {string} `${radical}|${key}`
     * @memberof Compound
     */
    static structure: (radical: string, key: string) => string;
    /**
     * @static
     * @description If value is a Compound string, destructure and return values
     * @function destructure
     * @param {string} value Value is supposed to be a compound value
     * @returns {Array<string>} Array with radical and key, or undefined
     * @memberof Compound
     */
    static destructure: (value: string) => Array<string>;
}
//# sourceMappingURL=Compound.d.ts.map