import React, { useState, useRef } from "react";

import { StorageItem } from "../../../js";
import { useComponentSize, useEventListener } from "../../../hooks";

import './HSplitter.css';

/**
 * Display two panels horizontally separated by a vertical divider. The divider can be moved using the mouse. The initial/final
 * panels widths are saved to the local storage if 'name' is provided
 * @param {object} props
 * @param {string} [props.name] Name of the storage item if we need to save/restore panels width
 * @param {Array<JSX>} props.children Only two panels allowed
 * @returns {JSX}
 */
const HSplitter = ({ name, children }) => {
  const { width : divWidth, ref : divRef } = useComponentSize(0);
  const dividerRef = useRef();
  const [panels, setPanels] = useState(() => {
    if (name) {
      const item = new StorageItem(name);
      if (item.value.length)
        return item.value;
    }
    return [50, 50];
  });
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
    name && setPanels(current => new StorageItem(name).value = current);// Save panels to local storage
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

  const [leftPanel, rightPanel] = panels;
  return(
    <div className='splitter-container' ref={divRef}>
      <div className='splitter-leftpanel-container' style={{ width: `${leftPanel}%` }}>
        {children[0]}
      </div>
      <div className='splitter-divider-container'>
        <div className='splitter-divider' onPointerDown={onMouseDown} ref={dividerRef}>
          <div className='splitter-divider-grabber' />
        </div>
      </div>
      <div className='splitter-rightpanel-container' style={{ width: `${rightPanel}%` }}>
        {children[1]}
      </div>
    </div>
  )
};

export default HSplitter;