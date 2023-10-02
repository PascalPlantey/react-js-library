import React, { createContext } from "react";

export const TableContext = createContext();

/**
 * Provides a context to share Table component data with some children
 * @param {object} props
 * @param {object} props.controlParams Control parameters coming from useTableParams/useStoredTableParams
 * @param {array} props.dataSource Data passed to the Table component
 * @param {array} props.filteredSource Data filtered
 * @param {array} props.columns Columns definitions passed to the Table component
 * @param {JSX} props.children
 * @returns {JSX}
 */
export const TableProvider = ({ controlParams, dataSource, filteredSource, columns, children }) => (
  <TableContext.Provider
    value={{
      controlParams,
      columns,
      dataSource,
      filteredSource
    }}
  >
    {children}
  </TableContext.Provider>
);

export const TableConsumer = TableContext.Consumer;
// export default TableContext;