import React from "react";

import { Slider, Space, Typography } from "antd";

import { ExtMath } from "../../js";

import './Sliders.css';

/**
 * Shows a slider in percentage around the value (pivot) may vary.  Returns the interval 
 * @param {object} props
 * @param {string} [props.className] Container class name
 * @param {Boolean} props.disabled
 * @param {Number} props.pivot Pivotal number around which the interval is calculated
 * @param {Array<Number, Number>} props.value Minimum and maximum value of interval
 * @param {object} props.rest All other props are forwarded to the Switch
 * @param {Function} props.onChange Called when the interval changes f(interval: Array<Number, Number>)
 * @returns {JSX}
 */
const PivotSlider = ({ className, pivot, disabled, value, ...rest }) => {
  const [min, max] = ExtMath.intervalFromPercentageIncrease(pivot, value, true);

  return(
    <Space className={className} direction='horizontal' align='center'>
      <Slider
        className='pivot-slider'
        disabled={disabled}
        min={5}
        max={100}
        step={5}
        value={value}
        tooltip={{ formatter: p => `${p}%` }}
        marks={{0: '0%', 50: '50%', 100: '100%'}}
        {...rest}
      />

      <Typography.Text>interval [{min}, {max}]</Typography.Text>
    </Space>
  );
};

export default PivotSlider;