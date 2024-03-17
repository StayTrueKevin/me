import { TypeAnimation } from "react-type-animation";
import Avatar from "~/components/avatar";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalStepAbout() {
  const { setCurrentLine, addInputLine, addOutputLine, disableTypingSpeedRef } =
    useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open ",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open abo",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open about",
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
    addInputLine(<b>about</b>);
    addOutputLine(<Avatar />);
    addOutputLine(
      `I'm a product oriented software engineer with ${
        new Date().getFullYear() - 2015
      }+ years of experience in the finance (tradfi and web3) and educational sectors.`
    );
    addOutputLine(
      "I actively contribute to open source engaging with the community through mine and others projects."
    );
    addOutputLine(
      "Driven by curiosity, I'm always exploring new tech and paradigms to innovate."
    );
    setCurrentLine("");
  };

  return fn;
}
