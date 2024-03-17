import type { MetaFunction } from "@remix-run/node";
import Exec from "~/components/exec";
import { MatrixRain } from "~/components/matrix-rain";
import { TerminalAnimation } from "~/components/terminal-animation";
import { TerminalProvider } from "~/components/terminal-base/useTerminalState";
import { WindowStateProvider } from "~/hooks/useWindowState";

export const meta: MetaFunction = () => {
  return [
    { title: "Kevin Faveri's Portfolio" },
    {
      name: "description",
      content:
        "Kevin Faveri | Portfolio | Web3, Ordinals, Solana, Open Source and more...",
    },
  ];
};

export default function Index() {
  return (
    <WindowStateProvider>
      <TerminalProvider>
        <div className="h-full w-full flex justify-center">
          <Exec />
          <MatrixRain />
          <TerminalAnimation />
        </div>
      </TerminalProvider>
    </WindowStateProvider>
  );
}
