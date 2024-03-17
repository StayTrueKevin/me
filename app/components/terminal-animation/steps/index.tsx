import useTerminalStepAbout from "./about";
import useTerminalStepExpertises from "./expertises";
import { TYPING_SPEED_FULL_COMMAND } from "./consts";
import { useEffectOnce } from "~/hooks/useEffectOnce";
import useTerminalStepProjects from "./projects";
import useTerminalStepWork from "./work";

export default function useTerminalAnimation() {
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
    })();
  });
}
