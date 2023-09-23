export default buildSelectOptions;
/**
 * Builds an array of options for an antd Select from a list of items
 * @param {Iterable} list List of items
 * @param {string} labelFieldName Property name from items of list to be used as Select label
 * @param {string} valueFieldName Property name from items of list to be used as Select value
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdUtils
 */
declare function buildSelectOptions(list: Iterable<any>, labelFieldName: string, valueFieldName: string): Array<object>;
//# sourceMappingURL=buildSelectOptions.d.ts.map