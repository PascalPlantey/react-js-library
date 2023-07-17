import React, { useRef, useEffect } from "react";

import { useOnmount, useOndismount, useToggle } from "../../../hooks";
import useMessagesList from "../../tools/useMessagesList";
import ShowMessages from "../../tools/ShowMessages";

const OnMountComponent = ({ addMessage }) => {
  useOnmount(() => addMessage('mounted'));
  useOndismount(() => addMessage('dismounted'));
  return <p style={{ border: '12px solid #948d8d' }}>Component loaded</p>;
};

/**
 * Demonstrates the useMount/useDismount hooks  
 * @example  
 * useOnmount(() => console.log('component has been rendered'));  
 * useOndismount(() => console.log('component has been destroyed'));  
 */
const OnMountDemonstration = () => {
  const [mounted, toggle] = useToggle(true);
  const [messages, addMessage] = useMessagesList();

  return(
    <>
      Please note that:
      <ul>
        <li>
          the mounted event appears after the Component has been rendered
        </li>
        <li>
          when the component is not displayed anymore the onDismount event is fired
        </li>
      </ul>
      <button onClick={toggle}>{mounted ? 'Dismount' : 'Mount'}</button><br/>
      <ShowMessages messages={messages} />
      {mounted && <OnMountComponent addMessage={addMessage}/>}<br/>
    </>
  )
};

export default OnMountDemonstration;