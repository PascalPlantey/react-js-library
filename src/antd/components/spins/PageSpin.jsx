import React, { useRef, useLayoutEffect, useState } from "react";

import SpinWithTip from './SpinWithTip.jsx';
import classNames from "classnames";
import { useWindowSize } from "../../../hooks/index.js";

/**
 * @function PageSpin
 * @param {string} [containerClassName] Container class name
 * @param {object} [containerStyle] Extra style information for the container
 * @param {boolean} [hidden=false] Hide the spin?
 * @param {string} [tip] Tip text
 * @param {string} [size='default'] Spin image size ('default'|'large'|'small')
 * @param {any} [props] All other props are injected in the antd Spin component
 * @returns {React.Component}
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