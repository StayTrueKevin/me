export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 mb-4">
      <a
        href="https://github.com/magicoss/msigner"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-2 no-underline"
      >
        <div className="flex justify-start space-x-2">
          <img src="/logos/btc-logo.png" alt="BTC Logo" className="w-6 h-6" />
          <img src="/logos/node-logo.png" alt="Node Logo" className="w-6 h-6" />
        </div>
        <span>msigner: Ordinals Atomic Swap PSBT Signer</span>
      </a>
      <a
        href="https://github.com/diffused-art/diffused-art-core"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-2 no-underline"
      >
        <div className="space-x-2">
          <img
            src="/logos/solana-logo.png"
            alt="Solana Logo"
            className="w-6 h-6"
          />
          <img
            src="/logos/react-logo.png"
            alt="React Logo"
            className="w-6 h-6"
          />
        </div>
        <span>Diffused Art - AI Art collection creator studio</span>
      </a>
      <a
        href="https://github.com/kevinfaveri/rustix"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-2 no-underline"
      >
        <div className="space-x-2">
          <img src="/logos/rust-logo.png" alt="Rust Logo" className="w-6 h-6" />
          <img
            src="/logos/react-logo.png"
            alt="React Logo"
            className="w-6 h-6"
          />
        </div>
        <span>Rust REST API + Remix FE Powered WebApp Boilerplate</span>
      </a>
      <a
        href="https://github.com/kevinfaveri/artmaps"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange space-y-2 no-underline"
      >
        <div className="space-x-2">
          <img src="/logos/btc-logo.png" alt="BTC Logo" className="w-6 h-6" />
          <img src="/logos/node-logo.png" alt="Node Logo" className="w-6 h-6" />
        </div>
        <span>Art Maps - Descentralized GenArt Protocol on top of Bitmaps Ordinals</span>
      </a>
    </div>
  );
}
