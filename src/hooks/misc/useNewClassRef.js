import { useRef } from "react";

/**
 * Creates a reference from the result of a function. If a reference is initialized with a 'new class()' the object will be constructed
 * at every render, even if this new object will not be used. The useNewClassRef avoids this pittfall, see
 * https://react.dev/reference/react/useRef for more
 * @param {function} func Function to execute once
 * @returns {React.RefObject}
 * @memberof Hooks#
 */
const useNewClassRef = func => {
  const ref = useRef();
  if (!ref.current)
    ref.current = func();
  return ref;
};

export default useNewClassRef;