import useWindowSize from "./useWindowSize";

/**
 * Hook to get alerted when window's width changes
 * @param {number} [step=30] Number of px in change after which the state will be updated
 * @param {boolean} [immediately=true] Start listening immediately
 * @returns {useWindowWidthResult} { width: number, working: boolean, toggle: function }
 * @memberof Hooks#
 */
const useWindowWidth = (step = 30, immediately = true) => {
  const { width, working, toggle } = useWindowSize(step, immediately);
  return { width, working, toggle };
};

export default useWindowWidth;