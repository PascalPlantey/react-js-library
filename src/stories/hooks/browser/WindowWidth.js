import { useWindowWidth } from "../../../hooks";
import PropTypes from 'prop-types';

/**
 * Demonstrates the useWindowWidth hook  
 * @example const { width, working, toggle } = useWindowWidth(step, immediately)  
 * @param {number} [step=30] Render every step pixels of window width change  
 * @param {boolean} [immediately=true] Start tracking window height immediately?  
 * @returns {object} { width, working, toggle }
 */
const WindowWidth = ({ step, immediately }) => {
  const { width, working, toggle } = useWindowWidth(step, immediately);
  const text = `{\n  width: ${width},\n  working: ${working}\n}`;

  return(
    <>
      Change window width to see the hook in effect
      <p>{text}</p>
      <button type="button" onClick={toggle}>Toggle tracking</button>
    </>
  );
};

WindowWidth.defaultProps = {
  step: 30,
  immediately: true,
};

WindowWidth.propTypes = {
  step: PropTypes.number,
  immediately: PropTypes.bool
};

export default WindowWidth;