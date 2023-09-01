export default useDocumentVisibility;
/**
 * Tracks visibility of the browser window
 * @param {boolean} immediately Start tracking immedialtely or when toggle is called?
 * @param {object} [options={}] { capture, once, passive } [see Mozilla]{@link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener}
 * @returns {object} { visible: boolean, working: boolean, toggle: function() {} }
 * @memberof Hooks#
 */
declare function useDocumentVisibility(immediately?: boolean, options?: object | undefined): object;
//# sourceMappingURL=useDocumentVisibility.d.ts.map