import Terminal, { ColorMode } from "../terminal-base";
import useTerminalAnimation from "./steps";

export const TerminalAnimation = () => {
  useTerminalAnimation();
  return (
    <Terminal
      name="KevinFaveri@MBP"
      prompt="~/projects/old/work/portfolio"
      colorMode={ColorMode.Dark}
    />
  );
};