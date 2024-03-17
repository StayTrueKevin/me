import React, { PropsWithChildren } from "react";

type TerminalInputProps = PropsWithChildren<{
  prompt?: string;
}>;

const TerminalInput = ({ children, prompt }: TerminalInputProps) => {
  return (
    <div
      className="react-terminal-line react-terminal-input terminal-input flex items-center mt-2"
    >
      <img src="/terminal.svg" width={16} height={16} alt="Terminal" className="ml--2" />
      {children}
    </div>
  );
};

export default TerminalInput;
