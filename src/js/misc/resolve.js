import { isFunction } from "../is";

/**
 * If fn is a function, return its result (fn(...args)), otherwise return fn (considered as a value)
 * @param {Function|any} [fn]
 * @param {...args} [args] Arguments to be passed to fn
 * @returns {any} Result of fn or vn (considered as a value)
 */
const resolve = (fn, ...args) =>  isFunction(fn)
                                    ? fn(...args)
                                    : fn
                                      ? fn
                                      : args && args.length > 0
                                        ? args[0]
                                        : undefined;

export default resolve;