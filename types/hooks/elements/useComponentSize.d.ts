export default useComponentSize;
/**
 * Hook to get alerted when an HTML element's height changes on Window resize event.
 * Limitation: there is no 'resize' event on document elements so we use it on window; thus the state is
 * not updated when another component changes, making the size of the ref.current element change too
 * @param {number} [step=30] Updates when window width or height changes
 * @param {boolean} [immediately=true] Start tracking size immediately?
 * @returns {object} { height, width, ref, working, toggle }
 * @example
 * const { height, width, ref, working, toggle } = useComponentSize();
 * return <img src='...' ref={ref} />
 * @memberof Hooks#
 */
declare function useComponentSize(step?: number | undefined, immediately?: boolean | undefined): object;
//# sourceMappingURL=useComponentSize.d.ts.map