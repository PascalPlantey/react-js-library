import { useState, useRef } from 'react';

import { StorageItem } from '../../js';

/**
 * Hook around the browser storage
 * @param {string} key Key name
 * @param {any} [def=''] Default value (if key does not exist in storage)
 * @param {boolean} [local=true] Use localStorage if true, sessionStorage otherwise
 * @returns {Array} [value, setValue, removeKey]
 * @memberof Hooks#
 */
const useStorageItem = (key, def = '', local = true) => {
  const storage = useRef();                               // Holds the StorageItem object
  if (!storage.current)
    storage.current = new StorageItem(key, def, local);   // Create the StorageItem

  const [value, setValue] = useState(def);

  return [
    value,
    newValue => setValue(storage.current.value = newValue), // Change the StorageItem value & set the state
    () => {
      storage.current.remove();
      setValue();                                         // Key does not exist anymore, set value to 'undefined'
    }
  ];
};

export default useStorageItem;