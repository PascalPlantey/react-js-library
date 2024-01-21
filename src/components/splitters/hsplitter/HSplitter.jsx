import React, { useState, useRef, useEffect } from "react";

import { StorageItem } from "../../../js";
import { useComponentSize, useEventListener, useNewClassRef } from "../../../hooks";

import './HSplitter.css';

/**
 * Display two panels horizontally separated by a vertical divider. The divider can be moved using the mouse. The initial/final
 * panels widths are saved to the local storage if 'name' is provided
 * @param {object} props
 * @param {string} [props.name] Name of the storage item if we need to save/restore panels width
 * @param {number} [props.widthToColumn] Number under which the children are displayed in column
 * @param {boolean} [props.columnReverse] If true will reverse the column direction
 * @param {function} [props.onChangeMode] Sends 'row' or 'column' to the parent
 * @param {Array<JSX>} props.children Only two panels allowed
 * @returns {JSX}
 * @maintenance
 * + 14/01/2024: added a callback to inform of view mode ('row'|'column') and force the leftPanel height in column mode
 *               so that the graphics do not shrink (strage behavior). To make the component more generic another height
 *               parameter { left, right } could be added in a future version
 */
const HSplitter = ({ name, widthToColumn, panelsHeight, columnReverse, onChangeMode, children }) => {
  const { width : divWidth, ref : divRef } = useComponentSize(0);

  const storedPanels = useNewClassRef(() => new StorageItem(name, []));
  const [panels, setPanels] = useState(() => {                          // Panels width
    if (name && storedPanels.value.length)
      return storedPanels.value;
    else
      return [50, 50];                                                  // Default to 50/50
  });
  const [leftPanelWidth, rightPanelWidth] = panels;
  const { left : leftPanelHeight, right : rightPanelHeight } = panelsHeight ?? {};

  const columnView = widthToColumn && divWidth <= widthToColumn;        // If widthToColumn is provided
  const direction = columnView ? (columnReverse ? 'column-reverse' : 'column') : 'row';

  useEffect(() => {
    onChangeMode && onChangeMode(columnView ? 'column' : 'row');
  }, [columnView]);

  const { toggle : toggleMouseMove } = useEventListener('pointermove', onMouseMove, document, false, { capture: true });
  const { toggle : toogleMouseUp } = useEventListener('pointerup', onMouseUp, document, false);

  function onMouseMove(e) {
    e.preventDefault();
    const { clientX : mouseX } = e;
    const { offsetLeft : divX } = divRef.current;
    const position = ((mouseX - divX) / divWidth) * 100;                // Mouse horizontal position in % relative to the container div

    if (position >= 0 && position <= 100)                               // Expressed as % it's easy to avoid outbounds
      setPanels([position, 100 - position]);
  };

  // Save position and stop tracking mouse
  function onMouseUp() {
    name && setPanels(current => storedPanels.value = current);         // Save panels to local storage and change state
    document.body.style.cursor = 'default';
    toggleMouseMove();
    toogleMouseUp();
  };

  // Start tracking mouse
  const onMouseDown = () => {
    document.body.style.cursor = 'col-resize';                          // Make sure cursor remain col-resize if mouse is out of the limits
    toggleMouseMove();
    toogleMouseUp();
  };

  return(
    <div
      className='splitter-container'
      style={{ flexDirection: direction }}
      ref={divRef}
    >
      <div
        className='splitter-leftpanel-container'
        style={{
          width: `${columnView ? '100' : leftPanelWidth}%`,
          height: `${leftPanelHeight ? leftPanelHeight : 'unset'}`
        }}
      >
        {(children?.length > 0 && children[0]) || 'no content'}
      </div>

      {columnView ?                                                     // Horizontal or vertical divider
          <div className='splitter-divider-container'>
            <div className='splitter-divider-column' />
          </div>
          :
          <div className='splitter-divider-container'>
            <div className='splitter-divider' onPointerDown={onMouseDown}>
              <div className='splitter-divider-grabber' />
            </div>
          </div>
      }

      <div
        className='splitter-rightpanel-container'
        style={{
          width: `${columnView ? '100' : rightPanelWidth}%`,
          height: `${rightPanelHeight ? rightPanelHeight : 'unset'}`
        }}
      >
        {(children?.length > 1 && children[1]) || 'no content'}
      </div>
    </div>
  )
};

export default HSplitter;