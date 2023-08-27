export default useToggle;
/**
 * Toggle hook, can be used to force a render to execute
 * @param {boolean} [initial=false] Initial toggle value
 * @returns {Array} [value: boolean, toggle: function]
 * @memberof Hooks#
 * @example
 * const [visible, toggleShow] = useToggle(true);
 * return(
 *   <>
 *     {visible && 'Message is visible'}
 *     <button onClick={toggleShow}>{visible ? 'Hide' : 'Show'}</button>
 *   </>
 * )
 */
declare function useToggle(initial?: boolean | undefined): any[];
//# sourceMappingURL=useToggle.d.ts.map