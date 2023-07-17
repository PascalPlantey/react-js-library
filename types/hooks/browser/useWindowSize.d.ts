export default useWindowSize;
/**
 * @description Hook to get alerted when the window size changes
 * @param {number} [step=30] Number of px in change after which the state will be updated
 * @param {boolean} [immediately=true] Start listening immediately (true by default)
 * @returns {useWindowSizeResult} {@link useWindowSizeResult}
 * @example const { height, width, working, toggle } = useWindowSize(step, immediately)
 * @memberof Hooks#
 */
declare function useWindowSize(step?: number | undefined, immediately?: boolean | undefined): useWindowSizeResult;
//# sourceMappingURL=useWindowSize.d.ts.map