import { useRef, ReactNode } from "react";
import TerminalOutput from "./linetypes/terminal-output";
import TerminalInput from "./linetypes/terminal-input";
import { useTerminalState } from "./useTerminalState";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface Props {
  name?: string;
  prompt?: string;
  height?: string;
  redBtnCallback?: () => void;
  yellowBtnCallback?: () => void;
  greenBtnCallback?: () => void;
  currentLineInput?: ReactNode;
}

// TODO: Improve mobile
// TODO: Add a way to indicate there's scroll still (useful for mobile)
// TODO: Add shortcut if you press enter or tap screen it just speed up all animations and render all steps
// TODO: If you click close, show matrix (easter egg)
const Terminal = ({
  name,
  prompt,
  redBtnCallback,
  yellowBtnCallback,
  greenBtnCallback,
}: Props) => {
  const { state } = useTerminalState();

  const scrollIntoViewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="react-terminal-wrapper h-full overflow-hidden">
      <div className="flex justify-between items-center px-4 py-0 rounded-tl-3xl mb-2 rounded-tr-3xl bg-[#363d4a] sticky top-0 z-10">
        <div className="react-terminal-window-buttons space-x-2">
          <button
            className={`clickable red-btn`}
            disabled={!redBtnCallback}
            onClick={redBtnCallback}
          />
          <button
            className={`clickable yellow-btn`}
            disabled={!yellowBtnCallback}
            onClick={yellowBtnCallback}
          />
          <button
            className={`clickable green-btn`}
            disabled={!greenBtnCallback}
            onClick={greenBtnCallback}
          />
        </div>
        <div className="text-primary-green font-bold">{name}</div>
        <div>
          <nav>
            <ul className="flex space-x-6 list-none">
              <li>
                <a
                  href="https://github.com/kevinfaveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:opacity-60 transition-opacity"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:kevin@faveri.dev"
                  className="text-primary-green hover:opacity-60 transition-opacity"
                >
                  <FaEnvelope size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kevinfaveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:opacity-60 transition-opacity"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kevfaveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:opacity-60 transition-opacity"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="react-terminal h-full px-4 overflow-auto box-border py-5">
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
