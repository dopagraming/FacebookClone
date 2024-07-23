import { createContext, useContext } from "react";

import React from "react";

const myContext = createContext();

const ContextProvider = ({ children }) => {
  return <myContext.Provider>{children}</myContext.Provider>;
};
const useMtContext = () => useContext(myContext);
export default ContextProvider;
