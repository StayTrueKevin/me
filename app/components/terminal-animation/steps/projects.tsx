import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TYPING_SPEED, TYPING_SPEED_FULL_COMMAND } from "./consts";
import Projects from "~/components/projects";

export default function useTerminalStepProjects() {
  const { setCurrentLine, addInputLine, addOutputLine } = useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open pr",
          TYPING_SPEED,
          "open proje",
          TYPING_SPEED,
          "open projects",
          TYPING_SPEED,
        ]}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );

    await new Promise((resolve) =>
      setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
    );

    addInputLine(<b>projects</b>);
    addOutputLine(<Projects />);
    addOutputLine(
      <a href="https://github.com/kevinfaveri" target="_blank" rel="noreferrer" className="hover:opacity-65 text-accent-orange no-underline pt-2">
        And many more on my GitHub profile!
      </a>
    );
    setCurrentLine("");
  };

  return fn;
}
