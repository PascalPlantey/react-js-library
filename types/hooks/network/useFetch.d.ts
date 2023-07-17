export default useFetch;
/**
 * Runs a fetch operation as a React hook
 * @param {string} api API end point
 * @param {string} [base=''] Base for URL ([Mozilla] {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL})
 * @param {object} options Fetch options ([Mozilla]) {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch}
 * @returns {useFetchResult} { status, ok, statusText, loading, result }
 * @memberof Hooks#
 */
declare function useFetch(api: string, base?: string | undefined, options: object): useFetchResult;
//# sourceMappingURL=useFetch.d.ts.map