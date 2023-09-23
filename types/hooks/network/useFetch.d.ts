export default useFetch;
/**
 * Runs a fetch operation as a React hook. The 'options' parameter should be a const or useMemo to avoid infinite loop
 * @param {string} [api=''] API end point ([Mozilla] {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL})
 * @param {string} url Base url
 * @param {object} options Fetch options ([Mozilla]) {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch}
 * @returns {Array} Array list [{ loading, ok, status, statusText, data, error }, refresh, abort]
 * @memberof Hooks#
 */
declare function useFetch(api?: string | undefined, url: string, options: object): any[];
//# sourceMappingURL=useFetch.d.ts.map