import { useImmediateRunOnDepsChange } from "../../../../hooks";

/**
 * Initialize the Table dataSource before renders
 * @param {array} initializers Datasource initialization definitions [{ dataIndex, valueInitializer: () => any }]
 * @param {Iterable} dataSource Raw Table records
 * @memberof AntdHooks
 */
const useInitializedSource = (initializers, dataSource) => useImmediateRunOnDepsChange(() =>
  initializers.forEach(({ dataIndex, valueInitializer }) =>
    dataSource.forEach(record => record[dataIndex] = valueInitializer(record))
  )
, [initializers, dataSource]);

export default useInitializedSource;