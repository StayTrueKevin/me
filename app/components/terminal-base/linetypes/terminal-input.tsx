import React, { PropsWithChildren } from "react";

type TerminalInputProps = PropsWithChildren<{
  prompt?: string;
}>;

const TerminalInput = ({ children, prompt }: TerminalInputProps) => {
  return (
    <div
      className="react-terminal-line react-terminal-input terminal-input flex items-center mt-2"
    >
      <img src="/terminal.svg" alt="Terminal" className="ml--2 !h-[16px] !w-[16px]" />
      {children}
    </div>
  );
};

export default TerminalInput;
