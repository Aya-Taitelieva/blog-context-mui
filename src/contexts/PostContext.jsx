import React, { createContext, useContext } from "react";

const postContext = createContext();

export const usePostContext = () => useContext(postContext);
const PostContext = ({ children }) => {
  const value = {};
  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};

export default PostContext;
