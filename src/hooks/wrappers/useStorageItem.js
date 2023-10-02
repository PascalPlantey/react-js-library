import { useState } from 'react';

import { StorageItem } from '../../js';
import { useNewClassRef } from '../misc';

/**
 * Hook around the browser storage
 * @param {string} key Key name
 * @param {any} [def=''] Default value (if key does not exist in storage)
 * @param {boolean} [local=true] Use localStorage if true, sessionStorage otherwise
 * @returns {Array} [value, setValue, removeKey]
 * @memberof Hooks#
 */
const useStorageItem = (key, def = '', local = true) => {
  const storage = useNewClassRef(() => new StorageItem(key, def, local)); // Holds the StorageItem object
  const [value, setValue] = useState(def);

  return [
    value,
    newValue => setValue(storage.current.value = newValue),               // Change the StorageItem value & set the state
    () => {
      storage.current.remove();
      setValue();                                                         // Key does not exist anymore, set value to 'undefined'
    }
  ];
};

export default useStorageItem;