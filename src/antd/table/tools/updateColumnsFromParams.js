/**
 * Modifies the Table columns by updating the filteredValue and sortOrder
 * @param {array} columns Table columns definitions
 * @param {object} filters The filters object given by Table onChange
 * @param {object} sort The sort object given by Table onChange
 */
const updateColumnsFromParams = (columns, filters, sort) =>
  columns.forEach(column => {
    const { onFilter, sorter, dataIndex } = column;
    column.filteredValue = (onFilter && filters?.[dataIndex]) ?? null;
    column.sortOrder = (sorter && sort?.field === dataIndex && sort.order) || null;
  });

export default updateColumnsFromParams;