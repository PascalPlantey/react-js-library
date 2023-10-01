/**
 * Initialize the Table dataSource
 * @param {array} initializers Datasource initialization definitions [{ dataIndex, valueInitializer: () => any }]
 * @param {Iterable} dataSource Raw Table records
 * @memberof AntdTools
 */
const initializeSource = (initializers, dataSource) =>
  initializers.forEach(({ dataIndex, valueInitializer }) =>
    dataSource.forEach(record => record[dataIndex] = valueInitializer(record))
  );

export default initializeSource;
