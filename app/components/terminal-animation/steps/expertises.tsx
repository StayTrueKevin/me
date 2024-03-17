import { TypeAnimation } from "react-type-animation";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TYPING_SPEED, TYPING_SPEED_FULL_COMMAND } from "./consts";
import Expertises from "~/components/expertises";

export default function useTerminalStepExpertises() {
  const { setCurrentLine, addInputLine, addOutputLine } = useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open ex",
          TYPING_SPEED,
          "open exper",
          TYPING_SPEED,
          "open expertise",
          TYPING_SPEED,
        ]}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );

    await new Promise((resolve) => setTimeout(resolve, TYPING_SPEED_FULL_COMMAND));

    addInputLine(<b>expertise</b>);
    addOutputLine(<Expertises />);
    addOutputLine("Back-end services with NodeJS and Rust; and front-end apps with React.");
    addOutputLine("Immersed in the Solana and Bitcoin ecosystems, wielding extensive knowledge on their groundbreaking technologies.");
    addOutputLine("DevOps experience in CI/CD, Docker, and Kubernetes.");
    setCurrentLine("");
  };

  return fn;
}
