import { useForceRender } from '../../../hooks';
import ShowMessages from '../../tools/ShowMessages';
import useMessagesList from '../../tools/useMessagesList';

/**
 * Demonstrates the useForceRender hook  
 * @example  
 * const render = useForceRender();  
 * console.log('render');  
 * return \<button onClick={render}></button>
 */
const ForceRender = () => { 
  const render = useForceRender();
  const [messages, addMessage] = useMessagesList();

  console.log('messages', messages)
  const handleRender = () => {
    render();
    addMessage('rendering');
  };

  return(
    <>
      <button onClick={handleRender}>Render</button>
      <ShowMessages title='Forced renders' messages={messages} />
    </>
  )
};

export default ForceRender;