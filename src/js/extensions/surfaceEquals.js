import { isArray } from "../is";

const arraysSurfaceEquals = (arr1, arr2) => {
  let changed = false;

  if (arr1.length !== arr2.length)
    changed = true;
  else
    for(let i = 0; !changed && i < arr1.length; ++i)
      changed = arr1[i] !== arr2[i];

  return !changed;
};

const objectsSurfaceEquals = (obj1, obj2) => {
  const sorter = ([k1], [k2]) => k1.localeCompare(k2);
  const props1 = Object.entries(obj1),
        props2 = Object.entries(obj2);
  let changed = false;

  if (props1.length !== props2.length)
    changed = true;
  else {
    const arr1 = props1.sort(sorter),
          arr2 = props2.sort(sorter);

    for(let i = 0; !changed && i < arr1.length; ++i)
      changed = arr1[i][0] !== arr2[i][0] || arr1[i][1] !== arr2[i][1];
  }

  return changed;
};

/**
 * Surface comparison of two values. Returns true if they are equal
 * @param {any} v1 First value to be compared
 * @param {any} v2 Second value to be compared
 * @returns {boolean}
 */
const surfaceEquals = (v1, v2) => {
  if      (v1 === v2)                   return true;
  else if (isArray(v1) && isArray(v2))  return arraysSurfaceEquals(v1, v2);
  else                                  return objectsSurfaceEquals(v1, v2);
};

export default surfaceEquals;