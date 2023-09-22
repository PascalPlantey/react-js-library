import React, { useRef, useLayoutEffect } from "react";

import SpinWithTip from './SpinWithTip.jsx';
import classNames from "classnames";
import { useWindowSize } from "../../../hooks/index.js";

/**
 * @function PageSpin
 * @param {string} [containerClassName] Container class name
 * @param {object} [containerStyle] Extra style information for the container
 * @param {boolean} [hidden=false] Hide the spin?
 * @param {string} [tip] Tip text
 * @param {string} [size='default'|'large'|'small'] Spin image size
 * @param {any} [props] All other props are injected in the antd Spin component
 * @returns {React.Component}
 */
const PageSpin = ({ containerClassName, ...props }) => {
  const ref = useRef();
  const positionRef = useRef({ top: 0, left: 0 });
  const { height, width } = useWindowSize(0);

  useLayoutEffect(() => {
    console.log(('layout'))
    positionRef.current = {
      top: (height - ref.current.offsetWidth) / 2,
      left: (width - ref.current.offsetHeight) / 2,
    };
  }, []);

  return(
    <SpinWithTip
      containerClassName={classNames('pp-spin-page', containerClassName)}
      containerStyle={positionRef.current}
      ref={ref}
      {...props}
    />
  );
};

export default PageSpin;