import { isFunction } from "../../../js";

/**
 * Set the filter values for a column in the columns definitions for an antd Table component
 * @param {array} columns Table columns
 * @param {string} index Index of the column to modify
 * @param {function|array} values Array of values or function returning an array of values
 * @returns {undefined}
 */
const setColumnFilters = (columns, index, values) => 
  columns.find(({ dataIndex }) => dataIndex === index).filters = isFunction(values) ? values() : values;

export default setColumnFilters;