/**
 * Returns true if there is at least one filter set on a column
 * @param {array} columns Table columns definitions
 * @returns {boolean}
 */
const hasOneFilter = columns => {
  for(const { onFilter, filteredValue } of columns)
    if (onFilter && filteredValue)
      return true;

  return false;
}

/**
 * Applies the filters defined in the columns to the records. The columns must be "controlled" (see useUpdateTableColumns) or
 * static in order to provide the "filteredValue" property
 * @param {array} columns Columns with filteredValue property set to the filters to be applied
 * @param {array} records Datasource records to be filtered
 * @returns {array} Array of records filtered
 * @memberof AntdUtils
 */
export const getFilteredSource = (columns, records) => {
  if (hasOneFilter(columns) && records.length) {                    // No change if no filter, avoids useless renders
    return records.filter(record => {                               // Test columns filters for each record to
      for(const { onFilter, filteredValue } of columns)             // determine if record is displayed or not
        if (onFilter && filteredValue) {                            // Filters are to be tested
          let oneFilterOk = false;                                  // For a given column, filters are OR'ed

          for(const value of filteredValue)
            if (onFilter(value, record)) {
              oneFilterOk = true;                                   // One value passed, test next column (AND between columns)
              break;
            }

          if (!oneFilterOk) return false;                           // No value passed the filter column, record will fail
        }

      return true;
    });
  }
  else
    return records;
};

export default getFilteredSource;