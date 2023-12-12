import { useEffect } from "react";

import { useObject } from "../misc";
import useStorageItem from "./useStorageItem";

/**
 * Wraps a useObject in the browser storage
 * @param {string} name Storage value name
 * @param {object|undefined} initial Initial object value
 * @param {boolean} local Local storage is true, session storage otherwise
 * @returns {object} { object, set: object => void, assign: object => void, remove: string|string[] => void, reset: void => void, clear: void => void, render: void => void }
 */
const useStorageObject = (name, initial = {}, local = true) => {
  const [storageValue, setStorageValue] = useStorageItem(name, initial, local);
  const wrappedObject = useObject(storageValue);
  const { object } = wrappedObject;

  useEffect(() => { setStorageValue(object) }, [object, setStorageValue]);

  return wrappedObject;
}

export default useStorageObject;