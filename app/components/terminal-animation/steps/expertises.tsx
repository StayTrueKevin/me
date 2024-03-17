import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import Expertises from "~/components/expertises";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalStepExpertises() {
  const { setCurrentLine, addInputLine, addOutputLine, disableTypingSpeedRef } =
    useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open ex",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open exper",
          getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          "open expertise",
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
    addInputLine(<b>expertise</b>);
    addOutputLine(<Expertises />);
    addOutputLine(
      "Back-end services with NodeJS and Rust; and front-end apps with React."
    );
    addOutputLine(
      "Immersed in the Solana and Bitcoin ecosystems, wielding extensive knowledge on their groundbreaking technologies."
    );
    addOutputLine("DevOps experience in CI/CD, Docker, and Kubernetes.");
    setCurrentLine("");
  };

  return fn;
}
