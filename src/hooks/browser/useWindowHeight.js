import useWindowSize from "./useWindowSize";

/**
 * Hook to get alerted when window's height changes
 * @param {number|undefined} step Number of px in change after which the state will be updated
 * @param {boolean|undefined} immediately Start listening immediately
 * @returns {useWindowHeightResult} { height: number, working: boolean, toggle: function }
 * @memberof Hooks#
 */
const useWindowHeight = (step = 30, immediately = true) => {
  const { height, working, toggle } = useWindowSize(step, immediately);
  return { height, working, toggle };
};

export default useWindowHeight;