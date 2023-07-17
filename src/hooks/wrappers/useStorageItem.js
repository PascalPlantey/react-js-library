import { useState, useRef } from 'react';

import { StorageItem } from '../../js';

/**
 * Hook around the browser storage
 * @param {string} name Key name
 * @param {any} [def=''] Default value if key does not exist in storage
 * @param {boolean} [local=true] Use localStorage if true, sessionStorage otherwise
 * @returns {Array} [value, setValue]
 * @memberof Hooks#
 */
const useStorageItem = (name, def = '', local = true) => {
  const storage = useRef();
  if (!storage.current)
    storage.current = new StorageItem(name, def, local);

  const [value, setValue] = useState(storage.current.value);

  const handleSetValue = value => setValue(storage.current.value = value);

  return [value, handleSetValue];
};

export default useStorageItem;