import { useState, useCallback } from "react";

const getNext = (cur, min, max) => cur + 1 > max ? min : cur + 1;
const getPrev = (cur, min, max) => cur - 1 < min ? max : cur - 1;

/**
 * A number which can increase of decrease.  It is circling: if it goes beyond max it goes back to min, and
 * versa vice
 * @param {Array<Number>} minMax Min and max values of the number
 * @param {number} [start=0] Initial value
 * @returns {object} { current, next, prev, gotoNext(), gotoPrev() }
 */
const useCirclingNumber = (minMax, start = 0) => {
  const [min, max] = minMax;
  const [current, setCurrent] = useState(start);

  const gotoNext = useCallback(() => setCurrent(cur => getNext(cur, min, max)), [min, max]);
  const gotoPrev = useCallback(() => setCurrent(cur => getPrev(cur, min, max)), [min, max]);

  return({
    current,
    next: getNext(current, min, max),
    prev: getPrev(current, min, max),
    gotoNext,
    gotoPrev,
  });
};


export default useCirclingNumber;