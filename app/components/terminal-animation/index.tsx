import Terminal from "../terminal-base";
import useTerminalAnimation from "./steps";

export const TerminalAnimation = () => {
  useTerminalAnimation();
  return (
    <Terminal name="kevfaveri@MBP" prompt="~/projects/old/work/portfolio" />
  );
};
