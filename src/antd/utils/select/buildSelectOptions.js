import { Compound, isArray, isIterable, isString } from "../../../js";

/**
 * Builds an array of options for an antd Select from a list of items
 * @param {Array} list List of items
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdUtils
 * @example
 * buildSelectOptions(['dog', 'cat']); => [{ label: 'dog', value: 'dog' }, { label: 'cat', value: 'cat' }]
 * buildSelectOptions([['dog', 1], ['cat', 2]]); => [{ label: 'dog', value: 1 }, { label: 'cat', value: 2 }]
 */
const buildSelectOptions = source =>
  source.map(item => {
    if (isArray(item)) return({ label: item[0], value: item[1] });
    else               return({ label: item, value: item });
  });

export default buildSelectOptions;