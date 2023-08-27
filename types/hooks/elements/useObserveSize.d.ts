export default useObserveSize;
/**
 * Observes changes to the size of a document element
 * @param {RefObject|string|Element|any} selector Element to be looked for; can be a string (tag ID or selector), or a ref (useRef), or an event target
 * @param {number} [step=30] Update state if width or height changes more than 'step' pixels
 * @param {object} [options={ box: 'content-box' }] Observer options, { box: 'content-box'|'border-box'|'device-pixel-content-box' }
 * @returns {object} { height: number, width: number }
 * @memberof Hooks#
 */
declare function useObserveSize(selector: RefObject | string | Element | any, step?: number | undefined, options?: object | undefined): object;
//# sourceMappingURL=useObserveSize.d.ts.map