import { useEffect } from "react";

import { useBoolean } from "../misc";
import useWindowWidth from "./useWindowWidth";

/**
 * Indicates if device is mobile or not
 * @param {number} [viewWidth=500] Width under which we consider being on a mobile display
 * @returns {boolean}
 */
const useIsMobileView = (viewWidth = 500) => {
  const [isMobile, setMobile] = useBoolean(window.innerWidth <= viewWidth);
  const { width } = useWindowWidth();

  useEffect(() => { setMobile(width <= viewWidth); }, [width]);

  return isMobile;
};

export default useIsMobileView;