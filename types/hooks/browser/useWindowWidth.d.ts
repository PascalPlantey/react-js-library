export default useWindowWidth;
/**
 * Hook to get alerted when window's width changes
 * @param {number} [step=30] Number of px in change after which the state will be updated
 * @param {boolean} [immediately=true] Start listening immediately
 * @returns {useWindowWidthResult} { width: number, working: boolean, toggle: function }
 * @memberof Hooks#
 */
declare function useWindowWidth(step?: number | undefined, immediately?: boolean | undefined): useWindowWidthResult;
//# sourceMappingURL=useWindowWidth.d.ts.map