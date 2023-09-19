export default useFetch;
/**
 * Runs a fetch operation as a React hook. The 'options' parameter should be a const or useMemo to avoid infinite loop
 * @param {string} [api=''] API end point ([Mozilla] {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL})
 * @param {string} url Base url
 * @param {object} options Fetch options ([Mozilla]) {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch}
 * @returns {useFetchResult} { status, ok, statusText, loading, result }
 * @memberof Hooks#
 */
declare function useFetch(api?: string | undefined, url: string, options: object): useFetchResult;
//# sourceMappingURL=useFetch.d.ts.map