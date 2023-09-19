import { useEffect } from 'react';

import { useObject } from '../misc';

const initialObj = {                                                // Make it const to avoid unnecessary renders
  loading: true,
  ok: undefined,
  status: undefined,
  statusText: undefined,
  data: {},
  error: undefined
};

/**
 * Runs a fetch operation as a React hook. The 'options' parameter should be a const or useMemo to avoid infinite loop
 * @param {string} [api=''] API end point ([Mozilla] {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/URL})
 * @param {string} url Base url
 * @param {object} options Fetch options ([Mozilla]) {@link https://developer.mozilla.org/en-US/docs/Web/API/fetch}
 * @returns {useFetchResult} { status, ok, statusText, loading, result }
 * @memberof Hooks#
 */
const useFetch = (api = '', url, options) => {
  const { object, assign, reset } = useObject(initialObj);

  useEffect(() => {
    reset();                                                        // Clear result to default initialObj

    fetch(encodeURI(new URL(api, url)), options)
    .then(result => {
      const { ok, status, statusText } = result;

      if (ok)
        result.json()                                               // .then is here to have the result.status etc, .catch falls up to the one provided
        .then(data => assign({ loading: false, ok, status, statusText, data }));
      else
        assign({ loading: false, ok, status, statusText });         // No data available
    })
    .catch(error => assign({ loading: false, ok: false, error }));  // fetch or json error

  }, [api, url, options, assign, reset]);

  return object;
};

export default useFetch;