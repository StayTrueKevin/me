import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import Work from "~/components/work";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalStepWork() {
  const { setCurrentLine, addInputLine, addOutputLine, disableTypingSpeedRef } =
    useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open w",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open wor",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open work",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
        ]}
        speed={{
          type: "keyStrokeDelayInMs",
          value: getTypingSpeeds(disableTypingSpeedRef).keystrokeSpeed,
        }}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );

    await waitTypingPromise(
      getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand
    );

    addInputLine(<b>work</b>);
    addOutputLine(<Work />);
    addOutputLine(
      <a
        href="https://www.linkedin.com/in/kevinfaveri"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange no-underline mt-5"
      >
        ... and more on my LinkedIn profile!
      </a>
    );
    setCurrentLine("");
  };

  return fn;
}
