import React, { forwardRef } from "react";

import { Spin, Typography } from "antd";
import PropTypes from 'prop-types';

import './spins.css';

const propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  tip: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'small']),
  hidden: PropTypes.bool
};

/**
 * @function SpinWithTip
 * @param {string} [containerClassName] Container class name
 * @param {object} [containerStyle] Extra style information for the container
 * @param {boolean} [hidden=false] Hide the spin?
 * @param {string} [tip] Tip text
 * @param {string} [size='default'|'large'|'small'] Spin image size
 * @param {any} [props] All other props are injected in the antd Spin component
 * @returns {React.Component}
 */
const SpinWithTip = forwardRef(({ containerClassName, containerStyle, tip, hidden, ...spinProps }, ref) =>
  hidden ?
    null
    :
    <div className={containerClassName} style={containerStyle} ref={ref}>
      <Spin className='pp-spin-container-centered' size='' {...spinProps} />
      <span className='pp-spin-container-centered'>
        <Typography>{tip}</Typography>
      </span>
    </div>
);

SpinWithTip.propTypes = propTypes;
SpinWithTip.defaultProps = {
  containerClassName: '',
  containerStyle: {},
  hidden: false,
  tip: ''
};

export default SpinWithTip;