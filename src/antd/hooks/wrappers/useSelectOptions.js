import { useMemo } from 'react';

import { buildSelectOptions } from '../../utils';

/**
 * Wraps in a hook an array of options for an antd Select from a list of items
 * @param {Iterable} list List of items
 * @param {string} labelFieldName Property name from items of list to be used as Select label
 * @param {string} valueFieldName Property name from items of list to be used as Select value
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdHooks
 */
const useSelectOptions = (list, labelFieldName, valueFieldName) =>
  useMemo(() => buildSelectOptions(list, labelFieldName, valueFieldName), [list, labelFieldName, valueFieldName]);

export default useSelectOptions;