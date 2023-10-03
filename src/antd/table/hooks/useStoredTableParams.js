import { useEffect } from "react";

import useTableParams from "./useTableParams";
import { useNewClassRef } from "../../../hooks";
import { StorageItem } from "../../../js";

/**
 * Provides a state for the Table parameters, storage in the local storage
 * @param {string} key Key used in the local storage
 * @returns {object} {tableParams, onChange, onChangePagination, onChangeFilters, onChangeSort, isFilterActive}
 * @memberof AntdHooks
 */
const useStoredTableParams = key => {
  const paramsRef = useNewClassRef(() => new StorageItem(key, { pagination: null, filters: null, sort: null }));
  const { tableParams, ...rest } = useTableParams(paramsRef.current.value);

  // Write local storage after render if tableParams have changed
  useEffect(() => {
    if (paramsRef.current.value !== tableParams)          // Do not save after first render as there is no change
      paramsRef.current.value = tableParams;
  }, [tableParams, paramsRef]);

  return { tableParams, ...rest };
};

export default useStoredTableParams;