import React, { ReactNode } from "react";

const TerminalOutput = ({ children }: { children?: ReactNode }) => {
  return <div className="react-terminal-line whitespace-pre-line text-sm md:text-lg">{children}</div>;
};

export default TerminalOutput;
