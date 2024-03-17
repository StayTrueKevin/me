import { useRef, ReactNode, useEffect, useState, useCallback } from "react";
import TerminalOutput from "./linetypes/terminal-output";
import TerminalInput from "./linetypes/terminal-input";
import { useTerminalState } from "./useTerminalState";
import {
  FaChevronDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import useInterval from "~/hooks/useInterval";
import { WindowState, useWindowState } from "~/hooks/useWindowState";

export interface Props {
  name?: string;
  prompt?: string;
  height?: string;
  redBtnCallback?: () => void;
  yellowBtnCallback?: () => void;
  greenBtnCallback?: () => void;
  currentLineInput?: ReactNode;
}

const Terminal = ({ name, prompt }: Props) => {
  const { windowState, setWindowState } = useWindowState();
  const isClosed = windowState === WindowState.Closed;
  const isExpandedMinimum = windowState === WindowState.ExpandedMinimum;
  const isMinimized = windowState === WindowState.Minimized;
  const { state } = useTerminalState();
  const [hasMoreToScroll, setHasMoreToScroll] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const checkForScroll = useCallback(() => {
    const current = scrollRef.current;
    if (current) {
      const { scrollTop, scrollHeight, clientHeight } = current;
      setHasMoreToScroll(scrollTop + clientHeight < scrollHeight);
    }
  }, []);

  useInterval(checkForScroll, 1000);

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkForScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", checkForScroll);
      }
    };
  }, [checkForScroll]);

  return (
    <div
      className="react-terminal-wrapper overflow-hidden z-10 p-2 bg-transparent transition-all duration-300 ease-in-out"
      style={{
        display: isClosed ? "none" : "inline-block",
        width: isExpandedMinimum && !isClosed && !isMinimized ? "75%" : "99%",
        height: isMinimized ? "auto" : "99%",
      }}
    >
      <div
        className="flex justify-between items-center py-0 rounded-tl-3xl bg-[#363d4a] z-20 w-full rounded-tr-3xl"
        style={{
          position: isMinimized ? "absolute" : "sticky",
          bottom: 0,
        }}
      >
        <div className="react-terminal-window-buttons space-x-2 flex-1 ml-4">
          <button
            className="clickable red-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px]"
            onClick={() => setWindowState(WindowState.Closed)}
          />
          <button
            className="clickable yellow-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px]"
            onClick={() =>
              setWindowState(
                windowState === WindowState.Minimized
                  ? WindowState.ExpandedFull
                  : WindowState.Minimized
              )
            }
          />
          <button
            className="clickable green-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px] hidden md:inline-block"
            onClick={() =>
              setWindowState(
                windowState === WindowState.ExpandedFull
                  ? WindowState.ExpandedMinimum
                  : WindowState.ExpandedFull
              )
            }
          />
        </div>
        <div className="flex justify-between items-center space-x-2 flex-1 mr-4">
          <div className="text-primary-green font-bold text-xs sm:text-sm md:text-lg">
            {name}
          </div>

          <div>
            <nav>
              <ul className="flex space-x-2 md:space-x-6 list-none">
                <li>
                  <a
                    href="https://github.com/kevinfaveri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:opacity-60 transition-opacity text-md sm:text-md md:text-lg"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kevin@faveri.dev"
                    className="text-primary-green hover:opacity-60 transition-opacity text-md sm:text-md md:text-lg"
                  >
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/kevinfaveri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:opacity-60 transition-opacity text-md sm:text-md md:text-lg"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/kevfaveri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:opacity-60 transition-opacity text-md sm:text-md md:text-lg"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="react-terminal h-full px-4 overflow-auto box-border py-5 bg-[#252a33] rounded-br-3xl rounded-bl-3xl"
        ref={scrollRef}
        onScroll={checkForScroll}
        style={{
          display: isMinimized ? "none" : "block",
        }}
      >
        {state?.terminalLineData}
        <div
          className="react-terminal-line react-terminal-input react-terminal-active-input flex flex-col md:flex-row"
          key="terminal-line-prompt"
        >
          <div className="react-terminal-prompt text-primary-green mr-1">
            {prompt || ">"}
          </div>
          <div>{state?.currentLine}</div>
        </div>
      </div>
      {hasMoreToScroll && (
        <div className="absolute bottom-1 flex justify-center w-full text-primary-green animate-bounce">
          <FaChevronDown size={36} />
        </div>
      )}
    </div>
  );
};

export { TerminalInput, TerminalOutput };
export default Terminal;
