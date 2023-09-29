import { useCallback } from "react";

import { useCalculation } from "../../../../hooks";
import { getFilteredSource } from "../tools";

/**
 * Hook around the getFilteredSource tool
 * @param {array} columns Table columns definition
 * @param {array} records Table data source
 * @returns {array} Filtered records
 * @memberof AntdHooks
 */
const useFilteredSource = (columns, records) =>
  useCalculation(useCallback(() => getFilteredSource(columns, records), [columns, records]));

export default useFilteredSource;