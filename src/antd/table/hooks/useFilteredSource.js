import { useState, useEffect } from "react";

import { getFilteredSource, getFilteredValues } from "../tools";
import { useCheckValuesChanges } from "../../../hooks";

/**
 * Hook around the getFilteredSource tool, generating a render after execution. Generates a render only if filteredValue of columns
 * are changed or if the records are changed.
 * @param {array} columns Table columns definition
 * @param {array} records Table data source
 * @returns {array} Filtered records
 * @memberof AntdHooks
 */
const useFilteredSource = (columns, records) => {
  const [newRecords, setNewRecords] = useState(() => getFilteredSource(columns, records));
  const filteredValues = getFilteredValues(columns);
  const [, checkChanges] = useCheckValuesChanges(filteredValues);

  // Conditional state change only if filteredValues changes
  useEffect(() => {
    if (checkChanges(filteredValues))
      setNewRecords(getFilteredSource(columns, records));
  }, [columns, filteredValues, checkChanges]);            // eslint-disable-line

  // records have changed, send a state change
  useEffect(() => {
    setNewRecords(getFilteredSource(columns, records));
  }, [records]);                                          // eslint-disable-line

  return newRecords;
};

export default useFilteredSource;