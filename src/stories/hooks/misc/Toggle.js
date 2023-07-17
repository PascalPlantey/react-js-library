import { useToggle } from "../../../hooks";

/**
 * Demonstrates the useToggle hook  
 * @example  
 * const [visible, toggleShow] = useToggle(true);  
 * return(  
 *   <>  
 *     {visible && 'Message is visible'}  
 *     \<button onClick={toggle}>{visible ? 'Hide' : 'Show'}</button>  
 *   </>  
 * );  
 */
const Toggle = () => {
  const [visible, toggle] = useToggle(true);

  return(
    <>
      <button onClick={toggle}>{visible ? 'Hide' : 'Show'}</button>
      <p style={{ marginTop: '20px' }}>{visible && 'Message is visible'}</p>
    </>
  )
};

export default Toggle;