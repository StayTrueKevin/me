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

export interface Props {
  name?: string;
  prompt?: string;
  height?: string;
  redBtnCallback?: () => void;
  yellowBtnCallback?: () => void;
  greenBtnCallback?: () => void;
  currentLineInput?: ReactNode;
}

// TODO: If you click close, show matrix (easter egg)
const Terminal = ({
  name,
  prompt,
  redBtnCallback,
  yellowBtnCallback,
  greenBtnCallback,
}: Props) => {
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
    <div className="react-terminal-wrapper h-full overflow-hidden">
      <div className="flex justify-between items-center px-4 py-0 rounded-tl-3xl mb-2 rounded-tr-3xl bg-[#363d4a] sticky top-0 z-10">
        <div className="react-terminal-window-buttons space-x-2 flex-1">
          <button
            className="clickable red-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px]"
            disabled={!redBtnCallback}
            onClick={redBtnCallback}
          />
          <button
            className="clickable yellow-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px]"
            disabled={!yellowBtnCallback}
            onClick={yellowBtnCallback}
          />
          <button
            className="clickable green-btn p-0 h-[10px] w-[10px] md:h-[15px] md:w-[15px]"
            disabled={!greenBtnCallback}
            onClick={greenBtnCallback}
          />
        </div>
        <div className="flex justify-between items-center space-x-2 flex-1">
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
        className="react-terminal h-full px-4 overflow-auto box-border py-5"
        ref={scrollRef}
        onScroll={checkForScroll}
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
