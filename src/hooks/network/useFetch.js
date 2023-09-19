import { useEffect, useRef } from 'react';

import { useObject, useToggle } from '../misc';

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
 * @returns {[object, function, function]} [{ loading, ok, status, statusText, data, error }, refresh, abort]
 * @memberof Hooks#
 */
const useFetch = (api = '', url, options) => {
  const refController = useRef();
  const [value, toggle] = useToggle();
  const { object, assign, reset } = useObject(initialObj);

  if (!refController.current)
    refController.current = new AbortController();

  useEffect(() => {
    reset();                                                        // Clear result to default initialObj

    fetch(encodeURI(new URL(api, url)), { ...options, signal: refController.current?.signal })
    .then(result => {
      const { ok, status, statusText } = result;

      if (ok)
        result
        .json()                                                     // .then is here to have the result.status etc, .catch falls down to the one below
        .then(data => assign({ loading: false, ok, status, statusText, data }));
      else
        assign({ loading: false, ok, status, statusText });         // No data available
    })
    .catch(error => assign({ loading: false, ok: false, error }));  // fetch or json error

    return () => {
      refController.current?.abort();
      refController.current = null;
    }
  }, [api, url, options, assign, reset, value]);

  return [object, toggle, refController.current?.abort || noop];
};

export default useFetch;