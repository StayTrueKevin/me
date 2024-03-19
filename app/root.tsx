import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import useBlinkingTerminalIcon from "./hooks/useBlinkingTerminalIcon";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const iconSrc = useBlinkingTerminalIcon();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={iconSrc} />
        <meta property="og:image" content="https://kevin.faveri.dev/og" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://kevin.faveri.dev" />
        <meta property="og:title" content="Kevin Faveri's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://kevin.faveri.dev/og" />
        <meta name="twitter:url" content="https://kevin.faveri.dev" />
        <meta name="twitter:title" content="Kevin Faveri's Portfolio" />
        <meta
          property="og:description"
          content="Kevin Faveri | Portfolio | Web3, Ordinals, Solana, Open Source and more..."
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
