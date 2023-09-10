export default ExtMath;
/**
 * @description Provides some static function not in standard Math
 */
declare class ExtMath {
    /**
     * Returns the euclidian distance between two points
     * @param {Array<number>|object} from Distance from this point
     * @param {Array<number>|object} to Distance to this point
     * @param {string} [xName] Key name for x property if `from/to` are objects
     * @param {string} [yName] Key name for y property if `from/to` are objects
     * @returns {number}
     * @example
     * ExtMath.XYdistance([15, 3], [5, 2]);
     * ExtMath.XYdistance({ x: 15, y: 3}, { x: 5, y: 2 });
     * ExtMath.XYdistance({ 'Projects': 15, 'Certifications': 3}, { 'Projects': 5, 'Certifications': 2 }, 'Projects', 'Certifications');
     */
    static XYdistance(from: Array<number> | object, to: Array<number> | object, xName?: string | undefined, yName?: string | undefined): number;
    /**
     * Returns the euclidian distance from the origin to the point `to`
     * @param {Array<number>|object} to Distance to this point
     * @param {string} [xName] Key name for x property if `to` is an object
     * @param {string} [yName] Key name for y property if `to` is an object
     * @returns {number}
     */
    static distance(to: Array<number> | object, xName?: string | undefined, yName?: string | undefined): number;
    /**
     * Returns the growth from `from` to `to`
     * @param {number} from Starting value
     * @param {number} to Ending value
     * @returns {number} % of growth
     * @example
     * const q1 = '155';
     * const q2 = '186';
     * console.log(`${ExtMath.growth(q1, q2)}%`)
     */
    static growth(from: number, to: number): number;
    /**
     * Changed the default object type name visible through Object.prototype.toString.call
     * @returns {string}
     */
    get [Symbol.toStringTag](): string;
}
//# sourceMappingURL=ExtMath.d.ts.map