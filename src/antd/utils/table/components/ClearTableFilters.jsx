import React from "react";

import { Button, Tooltip } from "antd";
import { FilterOutlined } from '@ant-design/icons';

/**
 * Show a "clear filter" button on top of an antd Table
 * @param {object} props
 * @param {JSX} props.icon Icon to be displayed (compilation error if I import an antd Icon here)
 * @param {function} props.isFilterActive Indicates if a filter is active
 * @param {function} props.onClearFilters Called when the user clicks the button
 * @returns {JSX}
 */
const ClearTableFilters = ({ isFilterActive, onClearFilters, ...rest }) => (
  <Tooltip title={!isFilterActive() ? 'No filter' : 'Clear all filters'}>
    <Button
      icon={<FilterOutlined />}
      type='primary'
      size='small'
      disabled={!isFilterActive()}
      onClick={onClearFilters}
      style={{ marginBottom: '5px'}}
    >
      Clear
    </Button>
  </Tooltip>
);

export default ClearTableFilters;