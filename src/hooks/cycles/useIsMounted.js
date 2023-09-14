import { useCallback, useEffect, useRef } from "react";

/**
 * Gives the mounted status of component
 * @returns {function}
 * @memberof Hooks#
 * @example
 * const mounted = useIsMounted();
 * if (mounted())
 *   ...
 */
const useIsMounted = () => {
  const status = useRef(false);
  const get = useCallback(() => status.current, []);

  useEffect(() => {
    status.current = true;

    return () => status.current = false;
  }, []);

  return get;
};

export default useIsMounted;