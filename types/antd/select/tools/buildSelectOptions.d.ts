export default buildSelectOptions;
/**
 * Builds an array of options for an antd Select from a list of items
 * @param {Array} list List of items
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdUtils
 * @example
 * buildSelectOptions(['dog', 'cat']); => [{ label: 'dog', value: 'dog' }, { label: 'cat', value: 'cat' }]
 * buildSelectOptions([['dog', 1], ['cat', 2]]); => [{ label: 'dog', value: 1 }, { label: 'cat', value: 2 }]
 */
declare function buildSelectOptions(source: any): Array<object>;
//# sourceMappingURL=buildSelectOptions.d.ts.map