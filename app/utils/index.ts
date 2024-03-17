import { TYPING_SPEED_FULL_COMMAND } from "~/components/terminal-animation/steps/consts";

export const waitTypingPromise = () => new Promise((resolve) =>
  setTimeout(resolve, TYPING_SPEED_FULL_COMMAND)
);
