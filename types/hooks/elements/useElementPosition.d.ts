export default useElementPosition;
/**
 * Hook to get position and size of an element through a React ref. clientRef should be stable (do not change element
 * between renders)
 * @param {object|string} [clientRef] React ref or query selector, will create one if not provided
 * @returns {Array} [ref, position] position: { top, left, bottom, right, height, width }, properties can be undefined if render
 * has not been done
 */
declare function useElementPosition(clientRef?: string | object | undefined): any[];
//# sourceMappingURL=useElementPosition.d.ts.map