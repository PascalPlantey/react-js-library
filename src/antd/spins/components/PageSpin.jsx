import React, { useRef, useLayoutEffect, useState } from "react";

import SpinWithTip from './SpinWithTip.jsx';
import classNames from "classnames";
import { useWindowSize } from "../../../hooks/index.js";

/**
 * Displays an antd Spin with an optional tip text. The Spin and tip are encapsulated in a container div to be displayed vertically
 * aligned. The container div is centered horizontally and vertically on the window
 * @function PageSpin
 * @param {object} props
 * @param {string} [props.containerClassName] Container class name
 * @param {object} [props.containerStyle] Extra style information for the container
 * @param {boolean} [props.hidden=false] Hide the spin?
 * @param {string} [props.tip] Tip text
 * @param {string} [props.size='default'] Spin image size ('default'|'large'|'small')
 * @param {any} [props.rest] All other {...props} are injected in the antd Spin component *
 * @returns {React.Component}
 * @memberof AntdComponents
 */
const PageSpin = ({ containerClassName, containerStyle, ...props }) => {
  const ref = useRef();
  const [position, setPosition] = useState({ ...containerStyle, top: 0, left: 0, opacity: '0%' });
  const { height, width } = useWindowSize(0);

  useLayoutEffect(() => {
    setPosition({
      ...containerStyle,
      top: (height - ref.current.offsetWidth) / 2,
      left: (width - ref.current.offsetHeight) / 2,
      opacity: '100%'                                     // Opacity 'hides' the component when at position(0, 0)
    });
  }, []);

  return(
    <SpinWithTip
      containerClassName={classNames('pp-spin-page', containerClassName)}
      containerStyle={position}
      ref={ref}
      {...props}
    />
  );
};

export default PageSpin;