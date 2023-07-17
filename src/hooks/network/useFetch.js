import { useState, useEffect, useRef } from 'react';

/**
 * Runs a fetch operation as a React hook
 * @param {string} api API end point
 * @param {string} [base=''] Base for URL ([Mozilla] {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL})
 * @param {object} options Fetch options ([Mozilla]) {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch}
 * @returns {useFetchResult} { status, ok, statusText, loading, result }
 * @memberof Hooks#
 */
const useFetch = (api, base = '', options) => {
  const dflt = useRef({ loading: true });
  const [result, setResult] = useState(dflt.current);

  useEffect(() => {
    setResult(dflt.current);                                        // Set 'loading' to true in case of dependencies change

    let status, statusText, ok;

    fetch(encodeURI(new URL(api, base).toString()), options)        // Encoding if needed (ie search parameters)
    .then(response => {
      ({ status, ok, statusText } = response);                      // Forward status information to the next 'then'
      return response.json();
    })
    .then(result => setResult({ status, ok, statusText, loading: false, result }))
    .catch(error => setResult({ status: 400, ok: false, statusText: error.message, loading: false }));
  }, [api, base, options]);

  return result;
};

export default useFetch;