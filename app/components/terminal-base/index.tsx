import { useRef, ReactNode } from "react";
import TerminalOutput from "./linetypes/terminal-output";
import TerminalInput from "./linetypes/terminal-input";
import { useTerminalState } from "./useTerminalState";

export enum ColorMode {
  Light,
  Dark,
}

export interface Props {
  name?: string;
  prompt?: string;
  height?: string;
  colorMode?: ColorMode;
  redBtnCallback?: () => void;
  yellowBtnCallback?: () => void;
  greenBtnCallback?: () => void;
  currentLineInput?: ReactNode;
}

// TODO: Improve mobile
// TODO: Do some level of code abstraction
// TODO: Add a way to indicate there's scroll still; and show scrollbar
// TODO: Add shorcut if you press enter or tap screen it just speed up all animations and render all steps
// TODO: Add socials to header
// TODO: If you click close, show matrix (easter egg)
// TODO: Add support for light mode
const Terminal = ({
  name,
  prompt,
  colorMode,
  redBtnCallback,
  yellowBtnCallback,
  greenBtnCallback,
}: Props) => {
  const { state } = useTerminalState();

  const scrollIntoViewRef = useRef<HTMLDivElement>(null);

  const classes = ["react-terminal-wrapper h-full"];
  if (colorMode === ColorMode.Light) {
    classes.push("react-terminal-light");
  }
  return (
    <div className={classes.join(" ")} data-terminal-name={name}>
      <div className="react-terminal-window-buttons">
        <button
          className={`${yellowBtnCallback ? "clickable" : ""} red-btn`}
          disabled={!redBtnCallback}
          onClick={redBtnCallback}
        />
        <button
          className={`${yellowBtnCallback ? "clickable" : ""} yellow-btn`}
          disabled={!yellowBtnCallback}
          onClick={yellowBtnCallback}
        />
        <button
          className={`${greenBtnCallback ? "clickable" : ""} green-btn`}
          disabled={!greenBtnCallback}
          onClick={greenBtnCallback}
        />
      </div>
      <div className="react-terminal h-full">
        {state?.terminalLineData}
        <div
          className="react-terminal-line react-terminal-input react-terminal-active-input"
          data-terminal-prompt={prompt || ">"}
          key="terminal-line-prompt"
        >
          {state?.currentLine}
        </div>
        <div ref={scrollIntoViewRef}></div>
      </div>
    </div>
  );
};

export { TerminalInput, TerminalOutput };
export default Terminal;
