import React, { cloneElement, useCallback, useState } from "react";

import { Typography } from "antd";

import { useBoolean } from '../../hooks/misc';

/**
 * Allow in place editing using a Typography.Text component. If needed an alternate component can
 * be used (editComponent) when the user starts editing the value
 * @param {Object} props
 * @param {String|Number} props.value
 * @param {ReactElement|undefined} props.editComponent
 * @param {Function} props.onChange Called when value changes
 * @param {Object} props.rest All other props forwarded to the Typography component
 * @returns {JSX}
 */
const InPlaceEdit = ({ value, editComponent, onChange, ...rest }) => {
  const [initial, setInitial] = useState(value);        // Initial value used to rollback if user cancels value change
  const [editing, setEditing] = useBoolean(false);

  const handleCancel = useCallback(() => {
    onChange(initial);
    setEditing(false);
  }, [initial, onChange, setEditing]);

  return(
    <>
      {(!editing || !editComponent) &&
        <Typography.Text
          editable={{
            onStart: () => { setInitial(value); setEditing(true) },
            onChange: onChange,
            onCancel: handleCancel,
            onEnd: () => setEditing(false)
          }}
          {...rest}
        >
          {value}
        </Typography.Text>
      }

      {editing && editComponent &&
        cloneElement(editComponent, {
          autoFocus: true,
          onChange: onChange,
          onCancel: handleCancel,
          onBlur: () => setEditing(false)
        })
      }
    </>
  );
};

export default InPlaceEdit;