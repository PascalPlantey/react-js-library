import { useDontMemo } from "../../../hooks";
import { initializeSource } from "../tools";

/**
 * Initialize the Table dataSource before renders
 * @param {array} initializers Datasource initialization definitions [{ dataIndex, valueInitializer: () => any }]
 * @param {Iterable} dataSource Raw Table records
 * @memberof AntdHooks
 */
const useInitializedSource = (initializers, dataSource) =>
  useDontMemo(() => initializeSource(initializers, dataSource), [initializers, dataSource]);

export default useInitializedSource;