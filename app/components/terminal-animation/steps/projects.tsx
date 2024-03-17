import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import Projects from "~/components/projects";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalStepProjects() {
  const { setCurrentLine, addInputLine, addOutputLine, disableTypingSpeedRef } =
    useTerminalState();

  const fn = async () => {
    <TypeAnimation
      sequence={[
        "open pr",
        getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
        "open proje",
        getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
        "open projects",
        getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
      ]}
      wrapper="span"
      cursor
      speed={{
        type: "keyStrokeDelayInMs",
        value: getTypingSpeeds(disableTypingSpeedRef).keystrokeSpeed,
      }}
      className="text-[18px] text-secondary-yellow"
    />;

    await waitTypingPromise(
      getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand
    );

    addInputLine(<b>projects</b>);
    addOutputLine(<Projects />);
    addOutputLine(
      <a
        href="https://github.com/kevinfaveri"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange no-underline pt-2"
      >
        And many more on my GitHub profile!
      </a>
    );
    setCurrentLine("");
  };

  return fn;
}
