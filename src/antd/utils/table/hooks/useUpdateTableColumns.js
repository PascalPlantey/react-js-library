import { useEffect, useMemo, useState } from "react";

/**
 * Update the columns definitions after a change. Needed for example when using parameters stored in the local storage. When the filters
 * and sort parameters are restored from the local storage the Table component will not take them into account, so we need to
 * apply the parameters "manually" on the columns
 * @param {array} columns Array defining the columns displayed on the Table
 * @param {object} filters Restored from the local storage
 * @param {object} sort Restored from the local storage
 * @returns {array} New array for the columns
 * @memberof AntdHooks
 * @notes: this can potentially be called many times with different parameters each time, so a useMemo or useFunctionResult will cost
 * more than a useState/useEffect
 */
const useUpdateTableColumns = (columns, filters, sort) => {
  const [updatedColumns, setUpdatedColumns] = useState(columns);

  useEffect(() => {
    setUpdatedColumns(prev => prev.map(column => {
      const { onFilter, sorter, dataIndex } = column;
      const filteredValue = (onFilter && filters?.[dataIndex]) ?? null;
      const sortOrder = (sorter && sort?.field === dataIndex && sort.order) || null;
      
      return ({ ...column, filteredValue, sortOrder });
    }));
  }, [columns, filters, sort]);

  return updatedColumns;
};

export default useUpdateTableColumns;