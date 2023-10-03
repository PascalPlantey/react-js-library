import { useRef } from "react";

import { surfaceEquals } from "../../js";

/**
 * Enables to check if the values in an array did change. See example in useFilteredSource
 * @param {array<any>} values Array of value to be compared
 * @returns {array} [latestValues, updateValues], the updateValues update the current values and return true if they different from previous ones
 * @memberof Hooks#
 */
const useCheckValuesChanges = values => {
  const valuesRef = useRef(values);

  const updateValues = newValues => {
    const changes = !valuesRef.current || !surfaceEquals(valuesRef.current, newValues);
    valuesRef.current = newValues;
    return changes;
  };

  return [valuesRef.current, updateValues];
};

export default useCheckValuesChanges;