import { RefObject } from "react";
import {
  KEYSTROKE_SPEED,
  TYPING_SPEED,
  TYPING_SPEED_FULL_COMMAND,
} from "~/components/terminal-animation/steps/consts";

export const waitTypingPromise = (typingSpeed = TYPING_SPEED_FULL_COMMAND) =>
  new Promise((resolve) => setTimeout(resolve, typingSpeed));

export const getTypingSpeeds = (disableTypingSpeedRef: RefObject<boolean>) => {
  const typingSpeed = disableTypingSpeedRef?.current ? 0 : TYPING_SPEED;
  const typingSpeedCommand = disableTypingSpeedRef?.current
    ? 0
    : TYPING_SPEED_FULL_COMMAND;
  const keystrokeSpeed = disableTypingSpeedRef?.current ? 0 : KEYSTROKE_SPEED;
  return { typingSpeed, typingSpeedCommand, keystrokeSpeed };
};
