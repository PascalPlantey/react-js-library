export default useOndismount;
/**
 * @function useOndismount
 * @description Calls a function when the component is dismounted
 * @param {function} fn Function called when the component is dismounted. Warning: only the initial version of the function will be executed
 * @returns {void}
 * @example
 * const listener = e => console.log(e);
 * useOnmount(() => addEventListener('mousemove', listener));
 * useOndismount(() => removeEventListener('mousemove', listener));
 * @memberof Hooks#
 */
declare function useOndismount(fn: Function): void;
//# sourceMappingURL=useOndismount.d.ts.map