import { Compound } from "../../../js";

/**
 * Builds an array of options for an antd Select from a list of items
 * @param {Iterable} list List of items
 * @param {string} labelFieldName Property name from items of list to be used as Select label
 * @param {string} valueFieldNames One or many property names from items of list to be used as Select value. If many names are given the
 * Select options values will be Compounds
 * @returns {Array<object>} [{ label: any, value: any }]
 * @memberof AntdUtils
 * @example
 * const arr = [{ id: '1', b: 'ab', c: 'bc' }, { id: '2', b: 'de', c: 'ef' }]
 * buildSelectOptions(arr, 'id', 'b'); => [{ label: '1', value: 'ab' }, { label: '1', value: 'de' }]
 * buildSelectOptions(arr, 'id', 'b', 'c'); => [{ label: '1', value: 'ab|bc' }, { label: '1', value: 'de|ef' }]
 */
const buildSelectOptions = (list, labelFieldName, ...valueFieldNames) => 
  valueFieldNames.length === 1 ?
    list.map(item => ({
      label: item[labelFieldName],
      value: item[valueFieldNames[0]]
    }))
  :
    list.map(item => ({
      label: item[labelFieldName],
      value: Compound.structure(valueFieldNames.map(field => item[field]))
    }));

export default buildSelectOptions;