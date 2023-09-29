import { useMemo } from 'react';

import { buildSelectOptions } from '../../utils';

/**
 * Wraps in a hook an array of options for an antd Select (see buildSelectOptions)
 * @param {Array} list List of items
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdHooks
 */
const useSelectOptions = list => useMemo(() => buildSelectOptions(list), [list]);

export default useSelectOptions;