import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TYPING_SPEED, TYPING_SPEED_FULL_COMMAND } from "./consts";
import Work from "~/components/work";

export default function useTerminalStepWork() {
  const { setCurrentLine, addInputLine, addOutputLine } = useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open w",
          TYPING_SPEED,
          "open wor",
          TYPING_SPEED,
          "open work",
          TYPING_SPEED,
        ]}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );

    await new Promise((resolve) => setTimeout(resolve, TYPING_SPEED_FULL_COMMAND));

    addInputLine(<b>work</b>);
    addOutputLine(<Work />);
    addOutputLine(
      <a href="https://www.linkedin.com/in/kevinfaveri" target="_blank" rel="noreferrer" className="hover:opacity-65 text-accent-orange no-underline mt-5">
        ... and more on my LinkedIn profile!
      </a>
    );
    setCurrentLine("");
  };

  return fn;
}
