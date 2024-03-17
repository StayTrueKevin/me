import { useState } from 'react';
import useInterval from './useInterval';

const useBlinkingTerminalIcon = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useInterval(() => {
    setIsBlinking((prev) => !prev);
  }, 500);

  const iconSrc = isBlinking ? "/terminal_blinked.png" : "/terminal.png";

  return iconSrc;
}
export default useBlinkingTerminalIcon;
