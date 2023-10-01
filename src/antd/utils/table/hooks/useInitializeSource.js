import { useEffect, useState } from "react";

const useInitializeSource = (columns, dataSource) => {
  const [source, setSource] = useState(dataSource);

  useEffect(() => {
    setSource(prev => {
      if (prev !== dataSource) {
        columns.forEach(({ dataIndex, valueInitilizer }) => {
          if (valueInitilizer) {
            return dataSource.map(record => ({
              ...record,
              [dataIndex]: valueInitilizer(record)
            }));
          }
        });
      }

      return prev;
    });
  }, [columns, dataSource]);

  return source;
};

export default useInitializeSource;