import React, { ReactNode } from "react";

const TerminalOutput = ({ children }: { children?: ReactNode }) => {
  return <div className="react-terminal-line">{children}</div>;
};

export default TerminalOutput;
