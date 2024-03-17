import { TypeAnimation } from "react-type-animation";
import Avatar from "~/components/avatar";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TYPING_SPEED } from "./consts";
import { waitTypingPromise } from "~/utils";

export default function useTerminalStepAbout() {
  const { setCurrentLine, addInputLine, addOutputLine } = useTerminalState();

  const fn = async () => {
    setCurrentLine(
      <TypeAnimation
        sequence={[
          "open ",
          TYPING_SPEED,
          "open abo",
          TYPING_SPEED,
          "open about",
          TYPING_SPEED,
        ]}
        wrapper="span"
        cursor
        className="text-[18px] text-secondary-yellow"
      />
    );
    await waitTypingPromise();
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
