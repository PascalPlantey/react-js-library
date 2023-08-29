export default useResizeObserver;
/**
 * Observes changes to the size of a document element
 * @param {React.MutableRefObject|string|Element} selector Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @param {number} [step=30] Update state if width or height changes more than 'step' pixels
 * @param {string} [box='content-box'] Observer options, 'content-box'|'border-box'|'device-pixel-content-box' ([see Mozilla]{@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe})
 * @returns {object} { height: number, width: number }
 * @memberof Hooks#
 */
declare function useResizeObserver(selector: import("react").MutableRefObject<any> | string | Element, step?: number | undefined, box?: string | undefined): object;
//# sourceMappingURL=useResizeObserver.d.ts.map