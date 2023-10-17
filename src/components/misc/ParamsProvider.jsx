import React, { createContext } from "react";

export const ParamsContext = createContext();

/**
 * A provider that is just a basic parameters forwarding mechanism
 * @param {object} props
 * @param {Array<JSX>} props.children Array of elements to be rendered
 * @param {object} props.rest All other props are provided to all children
 * @returns {JSX}
 */
export const ParamsProvider = ({ children, ...rest }) => (
  <ParamsContext.Provider value={{ ...rest }}>
    {children}
  </ParamsContext.Provider>
);

export const ParamsConsumer = ParamsProvider.Consumer;
