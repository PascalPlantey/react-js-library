import { useState, useCallback } from "react";

import toggleFilterValue from "../tools/toggleFilterValue";

/**
 * Manages the state of a Table component, and offers various functions to update or query the Table state parameters
 * @returns {object} {tableParams, onChange, onChangePagination, onChangeFilters, onChangeSort, isFilterActive}
 * @description Table onChange gives pagination, filters and sort values
 */
export const useTableParams = (params = { pagination: null, filters: null, sort: null }) => {
  const [tableParams, setTableParams] = useState(params);

  // Event from antd Table, change all Table parameters (except 'extra' parameter which is not kept/used)
  const onChange = useCallback((pagination, filters, sort) => setTableParams({ pagination, filters, sort }), []);

  // Change the pagination param
  const onChangePagination = useCallback(pagination => setTableParams(prevState => ({ ...prevState, pagination })), []);

  // Change the filters applied to the Table
  const onChangeFilters = useCallback(filters => setTableParams(prevState => ({ ...prevState, filters })), []);

  // Clear the filters applied to the Table
  const onClearFilters = useCallback(() => setTableParams(prevState => ({ ...prevState, filters: null })), []);

  // Toggle one value in the list of filters for the dataIndex keyName. filters are in the form { [key1]: [v1, ...], [key2]: [v1, ...], ... }
  const onToggleFilterValue = useCallback((keyName, value) =>
    setTableParams(prevState => {
      const { filters } = prevState;                                                  // All current filters
      return({ ...prevState, filters: toggleFilterValue(filters, keyName, value) });
  }), []);

  // Is there a filter active?
  const isFilterActive = useCallback(() => {
    let active = false;

    const { filters } = tableParams;

    for(const index in filters)
      if (filters[index]) {
        active = true;
        break;
      }

    return active;
  }, [tableParams]);

  // Change the sort applied to the Table
  const onChangeSort = useCallback(sort => setTableParams(prevState => ({ ...prevState, sort })), []);

  return({ tableParams, onChange, onChangePagination, onChangeFilters, onToggleFilterValue, onClearFilters, onChangeSort, isFilterActive });
};


export default useTableParams;