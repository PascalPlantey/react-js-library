import { useWindowHeight } from "../../../hooks";
import PropTypes from 'prop-types';

/**
 * Demonstrates the useWindowHeight hook  
 * @example const { height, working, toggle } = useWindowHeight(step, immediately)  
 * @param {number} [step=30] Render every step pixels of window height change  
 * @param {boolean} [immediately=true] Start tracking window height immediately?  
 * @returns {object} { height, working, toggle }
 */
const WindowHeight = ({ step, immediately }) => {
  const { height, working, toggle } = useWindowHeight(step, immediately);
  const text = `{\n  height: ${height},\n  working: ${working}\n}`;

  return(
    <>
      Change window height to see the hook in effect
      <p>{text}</p>
      <button type="button" onClick={toggle}>Toggle tracking</button>
    </>
  );
};

WindowHeight.defaultProps = {
  step: 30,
  immediately: true,
};

WindowHeight.propTypes = {
  step: PropTypes.number,
  immediately: PropTypes.bool
};

export default WindowHeight;