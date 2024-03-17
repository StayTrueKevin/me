import useTerminalStepAbout from "./about";
import useTerminalStepExpertises from "./expertises";
import { TYPING_SPEED, TYPING_SPEED_FULL_COMMAND } from "./consts";
import { useEffectOnce } from "~/hooks/useEffectOnce";
import useTerminalStepProjects from "./projects";
import useTerminalStepWork from "./work";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TypeAnimation } from "react-type-animation";

export default function useTerminalAnimation() {
  const { setCurrentLine } = useTerminalState();

  const fnStepAbout = useTerminalStepAbout();
  const fnStepExpertises = useTerminalStepExpertises();
  const fnStepProjects = useTerminalStepProjects();
  const fnStepWork = useTerminalStepWork();
  useEffectOnce(() => {
    (async () => {
      await fnStepAbout();
      await new Promise((resolve) =>
        setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
      );
      await fnStepExpertises();
      await new Promise((resolve) =>
        setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
      );
      await fnStepProjects();
      await new Promise((resolve) =>
        setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
      );
      await fnStepWork();
      await new Promise((resolve) =>
      setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
    );
      setCurrentLine( <TypeAnimation
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
      />)
    })();
  });
}
