export default useCirclingNumber;
/**
 * A number which can increase of decrease.  It is circling: if it goes beyond max it goes back to min, and
 * versa vice
 * @param {Array<Number>} minMax Min and max values of the number
 * @param {number} [start=0] Initial value
 * @returns {object} { current, next, prev, gotoNext(), gotoPrev() }
 */
declare function useCirclingNumber(minMax: Array<number>, start?: number | undefined): object;
//# sourceMappingURL=useCirclingNumber.d.ts.map