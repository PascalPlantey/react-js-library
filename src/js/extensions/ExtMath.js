import { isArray } from "../is";

/**
 * @description Provides some static function not in standard Math
 */
class ExtMath {
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
  static XYdistance(from, to, xName = 'x', yName = 'y') {
    let toX, toY, fromX, fromY;
  
    if (isArray(from) || isArray(to)) {
      [toX, toY] = to;
      [fromX, fromY] = from;
    }
    else {
      toX = to[xName];
      toY = to[yName];
      fromX = from[xName];
      fromY = from[yName];
    }
  
    return Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  };
  
  /**
   * Returns the euclidian distance from the origin to the point `to`
   * @param {Array<number>|object} to Distance to this point
   * @param {string} [xName] Key name for x property if `to` is an object
   * @param {string} [yName] Key name for y property if `to` is an object
   * @returns {number}
   */
  static distance(to, xName = 'x', yName = 'y') {
    return isArray(to) ? XYdistance([0, 0], to) : XYdistance({ [xName]: 0, [yName]: 0 }, to, xName, yName);
  }
  
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
  static growth(from, to) {
    return (to - from) / from * 100;
  }
};

export default ExtMath;