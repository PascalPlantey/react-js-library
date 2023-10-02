import { useState, useEffect, useRef } from "react";

import { getFilteredSource, getFilteredValues } from "../tools";
import { surfaceEquals } from "../../../../js";

const useCheckValuesChanges = values => {
  const valuesRef = useRef(values);

  const updateValues = newValues => {
    const changes = !valuesRef.current || !surfaceEquals(valuesRef.current, newValues);
    valuesRef.current = values;
    return changes;
  };

  return [valuesRef.current, updateValues];
};

/**
 * Hook around the getFilteredSource tool, generating a render after execution
 * @param {array} columns Table columns definition
 * @param {array} records Table data source
 * @returns {array} Filtered records
 * @memberof AntdHooks
 */
const useFilteredSource = (columns, records) => {
  const [newRecords, setNewRecords] = useState(() => getFilteredSource(columns, records));
  const filteredValues = getFilteredValues(columns);
  const [, checkChanges] = useCheckValuesChanges(filteredValues);

  useEffect(() => {
    if (checkChanges(filteredValues)) {
      console.log('filtering records');
      setNewRecords(getFilteredSource(columns, records));
    }
  }, [columns, filteredValues, checkChanges]);            // eslint-disable-line

  useEffect(() => {
    console.log('filtering records');
    setNewRecords(getFilteredSource(columns, records));
  }, [records]);                                          // eslint-disable-line

  return newRecords;
};

// useCalculation(
//   useCallback(() => getFilteredSource(columns, records), [columns, records])
// );

export default useFilteredSource;