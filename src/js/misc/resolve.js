import { isFunction } from "../is";

/**
 * 
 * @param {Function|any} fn 
 * @returns {any} Result of fn or vn (considered as a value)
 */
const resolve = (fn, ...args) =>
  isFunction(fn) ? fn(...args) : fn;

export default resolve;