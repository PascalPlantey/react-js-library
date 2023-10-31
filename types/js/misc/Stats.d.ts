export default Stats;
/**
 * Mean and standard deviation calculations. The class keep all the values added to the serie to be able
 * to calculate the standard deviation
 */
declare class Stats {
    /**
     * Ranks a collection of objects by the given fieldname. The array (data) is modified
     * @param {Array<any>} data Collection of objects to be ranked
     * @param {string} fieldName Name of the field to be ranked by (object[fieldName] should be a number)
     * @param {string} [rankFieldName='rank'] Name of the ranking field
     * @returns {this} Sorted by fieldName, with a new property named 'rank'
     */
    static rankBy(data: Array<any>, fieldName: string, rankFieldName?: string | undefined): any;
    /**
     * Calculate the increase between a base number (from) and its value after increase (to)
     * @param {number} from
     * @param {number} to
     * @param {boolean} [floor=false]
     * @returns {number} Percentage difference, positive or negative
     */
    static percentageIncrease(from: number, to: number, floor?: boolean | undefined): number;
    /**
     * Calculate the value of the base number (from) after an increase (increasePercentage, positive or negative)
     * @param {number} from
     * @param {number} increasePercentage
     * @param {boolean} [floor=false]
     * @returns {number}
     */
    static applyPercentageIncrease(from: number, increasePercentage: number, floor?: boolean | undefined): number;
    /**
     * Calculate the interval values surrounding of the base number (from) after an increase and increase or
     * the percentage increasePercentage. The interval is sorted ascending
     * @param {number} from
     * @param {number} increasePercentage
     * @param {boolean} floor
     * @returns {number}
     */
    static intervalFromPercentageIncrease(from: number, increasePercentage: number, floor?: boolean): number;
    /**
     * @param {Iterable} [itr=Array] Iterable used to get values
     * @param {function} [callBack] If provided, used to gather values from itr callBack: (item) => number
     */
    constructor(itr?: Iterable<any> | undefined, callBack?: Function | undefined);
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
    add(itr?: Iterable<any> | undefined, callback?: Function | undefined): this;
    /**
     * Clears the serie
     * @returns {this}
     */
    reset(): this;
    /**
     * Mean of the serie
     * @type {number}
     */
    get mean(): number;
    /**
     * Standard deviation for the serie
     * @type {number}
     */
    get stddev(): number;
    /**
     * Variation coefficient
     * @type {number}
     */
    get variation(): number;
    /**
     * Gives the sum of the serie values
     * @type {number}
     */
    get sum(): number;
    /**
     * Gives the size (number of values) of the serie
     * @type {number}
     */
    get size(): number;
    /**
     * Changed the default object type name visible through Object.prototype.toString.call
     * @returns {string}
     */
    get [Symbol.toStringTag](): string;
    #private;
}
//# sourceMappingURL=Stats.d.ts.map