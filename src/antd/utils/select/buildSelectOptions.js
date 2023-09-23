/**
 * Builds an array of options for an antd Select from a list of items
 * @param {Iterable} list List of items
 * @param {string} labelFieldName Property name from items of list to be used as Select label
 * @param {string} valueFieldName Property name from items of list to be used as Select value
 * @returns {Array<object>} [{ label: any, value: any }]
 */
const buildSelectOptions = (list, labelFieldName, valueFieldName) => {
  const options = [];
  console.log(('building'))
  for(const item of list)
    options.push({ label: item[labelFieldName], value: item[valueFieldName] });

  return options;
};

export default buildSelectOptions;