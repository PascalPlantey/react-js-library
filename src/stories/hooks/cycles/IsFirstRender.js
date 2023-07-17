import { useState } from "react";
import { useIsFirstRender } from "../../../hooks";

const Component = () => {
  const first = useIsFirstRender();
  return <p style={{ border: '12px solid #948d8d' }}>Component: {first ? 'first render' : 'not first render'}</p>
};

/**
 * Demonstrates the useIsFirstRender hook  
 * @example  
 * const isFirst = useIsFirstRender();  
 * return <>{isFirst ? 'First' : 'Not first'}</>
 */
const IsFirstRender = () => {
  const [count, setCount]  = useState(1);
  const [unMount, setUnmount] = useState(false);

  const increment = () => setCount(prev => prev + 1);
  const remount = () => {
    setUnmount(true);
    setTimeout(() => {
      setUnmount(false);
      setCount(1);
    }, 200);
  };

  return(
    <>
      <p>Render counts: {count}</p>
      <button onClick={increment}>Force render</button>
      <button onClick={remount}>Remount component</button>
      {unMount === false && <Component />}
    </>
  )
};

export default IsFirstRender;