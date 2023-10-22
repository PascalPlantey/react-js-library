import React from "react";

import { Tooltip } from "antd";

import useBoolean from '../../hooks/misc/useBoolean';
import isPrimitive from '../../js/is/isPrimitive';

import './UlTooltip.css';

/**
 * Shows a tooltip only if values are provided
 * @param {object} props
 * @param {array|string} [props.liValues] Values to be displayed in a <li> style
 * @param {JSX} [props.children] The elements to be displayed
 * @param {array<object>} [props.rest] All other props are forwarded to the tooltip (ie. placement=)
 * @returns {JSX}
 */
const UlTooltip = ({ liValues, children, ...rest }) => {
  const [open, setOpen] = useBoolean(false);

  const onOpenChange = bool => setOpen(liValues.length === 0 ? false : bool);

  return(
    <Tooltip
      open={open}
      onOpenChange={onOpenChange}
      title={
        <ul className="tooltip-ul">
          {isPrimitive(liValues) ?
            <li>{liValues}</li>
            :
            liValues.sort().map((value, index) => <li key={index}>{value}</li>)
          }
        </ul>
      }
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

UlTooltip.defaultProps = {
  liValues: ''
};

export default UlTooltip;