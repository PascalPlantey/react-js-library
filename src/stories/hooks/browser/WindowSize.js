import { useWindowSize } from "../../../hooks";
import PropTypes from 'prop-types';

import { useWindowSizeResult } from '../../../types';

/**
 * Demonstrates the useWindowSize hook  
 * @example const { height, width, working, toggle } = useWindowSize(step, immediately)  
 * @param {number} [step=30] Render every step pixels of window size change  
 * @param {boolean} [immediately=true] Start tracking window size immediately?  
 * @returns {useWindowSizeResult} { height, width, working, toggle }
 */
const WindowSize = ({ step, immediately }) => {
  const { height, width, working, toggle } = useWindowSize(step, immediately);
  const text = `{\n  height: ${height},\n  width: ${width},\n  working: ${working}\n}`;

  return(
    <>
      Change window size to see the hook in effect
      <p>{text}</p>
      <button type="button" onClick={toggle}>Toggle tracking</button>
    </>
  )
};

WindowSize.defaultProps = {
  step: 15,
  immediately: true,
};

WindowSize.propTypes = {
  step: PropTypes.number,
  immediately: PropTypes.bool
};

export default WindowSize;