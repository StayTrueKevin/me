import useTerminalStepAbout from "./about";
import useTerminalStepExpertises from "./expertises";
import { useEffectOnce } from "~/hooks/useEffectOnce";
import useTerminalStepProjects from "./projects";
import useTerminalStepWork from "./work";
import { useTerminalState } from "~/components/terminal-base/useTerminalState";
import { TypeAnimation } from "react-type-animation";
import { getTypingSpeeds, waitTypingPromise } from "~/utils";

export default function useTerminalAnimation() {
  const { setCurrentLine, disableTypingSpeedRef } = useTerminalState();

  const fnStepAbout = useTerminalStepAbout();
  const fnStepExpertises = useTerminalStepExpertises();
  const fnStepProjects = useTerminalStepProjects();
  const fnStepWork = useTerminalStepWork();
  useEffectOnce(() => {
    (async () => {
      await fnStepAbout();
      await waitTypingPromise(getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand);
      await fnStepExpertises();
      await waitTypingPromise(getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand);
      await fnStepProjects();
      await waitTypingPromise(getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand);
      await fnStepWork();
      await waitTypingPromise(getTypingSpeeds(disableTypingSpeedRef).typingSpeedCommand);
      setCurrentLine(
        <TypeAnimation
          sequence={[
            "Made wi",
            getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
            "Made with ♥️ by Kev",
            getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
            "Made with ♥️ by Kevin Faveri",
            getTypingSpeeds(disableTypingSpeedRef).typingSpeed,
          ]}
          wrapper="span"
          cursor
          speed={{
            type: "keyStrokeDelayInMs",
            value: getTypingSpeeds(disableTypingSpeedRef).keystrokeSpeed,
          }}
          className="text-[18px] text-secondary-yellow"
        />
      );
    })();
  });
}
