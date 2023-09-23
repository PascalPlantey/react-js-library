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
 * Displays an antd Spin form with an optional tip text. The Spin and tip are encapsulated in a container div to be displayed vertically
 * aligned
 * @function SpinWithTip
 * @param {object} props
 * @param {string} [props.containerClassName] Container class name
 * @param {object} [props.containerStyle] Extra style information for the container
 * @param {boolean} [props.hidden=false] Hide the spin?
 * @param {string} [props.tip] Tip text
 * @param {string} [props.size='default'] Spin image size ('default'|'large'|'small')
 * @param {React.MutableRefObject} [props.ref] Ref set in the container div
 * @param {any} [props.rest] All other {...props} are injected in the antd Spin component
 * @returns {React.Component}
 * @memberof AntdComponents
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