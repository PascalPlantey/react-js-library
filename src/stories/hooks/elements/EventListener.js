import React from 'react';
import PropTypes from 'prop-types';

import ShowMessages from '../../tools/ShowMessages';
import useMessagesList from '../../tools/useMessagesList';
import { useEventListener } from '../../../hooks';

/**
 * @description Fire a function when a document event happens  
 * @param {string} name Event name (mouseup, mousemove, ...)  
 * @param {function} fn Function to be called on event (receives the event information) (event) => any  
 * @param {Node} [elt=window] Document element  
 * @param {boolean} [immediately=true] Listen immediately or after toggle()  
 * @param {object} [options={}] { capture, once, passive } [Mozilla]{@link ' https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener '}  
 * @returns {object} { working: boolean, toggle: function() {} }  
 * @example
 * const { working, toggle } = useEventListener('mousemove', console.log);
 */
const EventListener = ({ name }) => {
  const [messages, addMessage] = useMessagesList();
  const listener = evt => addMessage(JSON.stringify(evt));
  const { working, toggle } = useEventListener(name, listener);

  return(
    <>
      <p>{`{ working: ${working} }`}</p>
      <button onClick={toggle}>Toggle</button>
      <ShowMessages messages={messages} />
    </>
  );
};

EventListener.defaultProps = {
  name: 'mousedown'
};

EventListener.propTypes = {
  name: PropTypes.string
};

export default EventListener;