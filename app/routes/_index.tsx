import type { MetaFunction } from "@remix-run/node";
import { TerminalAnimation } from "~/components/terminal-animation";
import { TerminalProvider } from "~/components/terminal-base/useTerminalState";

export const meta: MetaFunction = () => {
  return [
    { title: "Kevin Faveri Portfolio" },
    {
      name: "description",
      content:
        "Kevin Faveri | Portfolio | Web3, Ordinals, Solana, Open Source and more...",
    },
  ];
};

export default function Index() {
  return (
    <TerminalProvider>
      <div className="h-full">
        <TerminalAnimation />
      </div>
    </TerminalProvider>
  );
}
