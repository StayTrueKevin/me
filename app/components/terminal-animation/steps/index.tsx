import useTerminalStepAbout from "./about";
import useTerminalStepExpertises from "./expertises";
import { TYPING_SPEED } from "./consts";
import { useEffectOnce } from "~/hooks/useEffectOnce";
import useTerminalStepProjects from "./projects";
import useTerminalStepWork from "./work";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TypeAnimation } from "react-type-animation";
import { waitTypingPromise } from "~/utils";

export default function useTerminalAnimation() {
  const { setCurrentLine } = useTerminalState();

  const fnStepAbout = useTerminalStepAbout();
  const fnStepExpertises = useTerminalStepExpertises();
  const fnStepProjects = useTerminalStepProjects();
  const fnStepWork = useTerminalStepWork();
  useEffectOnce(() => {
    (async () => {
      await fnStepAbout();
      await waitTypingPromise();
      await fnStepExpertises();
      await waitTypingPromise();
      await fnStepProjects();
      await waitTypingPromise();
      await fnStepWork();
      await waitTypingPromise();
      setCurrentLine(
        <TypeAnimation
          sequence={[
            "Made wi",
            TYPING_SPEED,
            "Made with ♥️ by Kev",
            TYPING_SPEED,
            "Made with ♥️ by Kevin Faveri",
            TYPING_SPEED,
          ]}
          wrapper="span"
          cursor
          className="text-[18px] text-secondary-yellow"
        />
      );
    })();
  });
}
