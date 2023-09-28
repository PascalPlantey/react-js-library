import { useEffect } from "react";

import { useNewClassRef } from "../../../../hooks";
import { StorageItem } from "../../../../js";
import useTableParams from "./useTableParams";

/**
 * Provides a state for the Table parameters, storage in the local storage
 * @param {string} key Key used in the local storage
 * @returns {object} {tableParams, onChange, onChangePagination, onChangeFilters, onChangeSort, isFilterActive}
 * @memberof AntdHooks
 */
const useStoredTableParams = key => {
  const paramsRef = useNewClassRef(() => new StorageItem(key, { pagination: null, filters: null, sort: null }));
  const { tableParams, ...rest } = useTableParams(paramsRef.current.value);

  // Write local storage if tableParams have changed
  useEffect(() => {
    if (paramsRef.current.value !== tableParams)
      paramsRef.current.value = tableParams;
  }, [tableParams, paramsRef]);

  return { tableParams, ...rest };
};

export default useStoredTableParams;