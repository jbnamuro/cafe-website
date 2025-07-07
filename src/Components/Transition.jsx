import React, { useState } from "react";

const Transition = ({ children }) => {
  const [currentChild, changeChild] = useState(children);
  return <div>{currentChild}</div>;
};

export default Transition;
