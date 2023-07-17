export default useOnmount;
/**
 * @function useOnmount
 * @description Calls a function when the component is mounted
 * @param {function} fn Function called when the component is mounted
 * @returns {void}
 * @example
 * const listener = e => console.log(e);
 * useOnmount(() => addEventListener('mousemove', listener));
 * useOndismount(() => removeEventListener('mousemove', listener));
 * @memberof Hooks#
 */
declare function useOnmount(fn: Function): void;
//# sourceMappingURL=useOnmount.d.ts.map