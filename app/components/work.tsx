export default function Work() {
  return (
    <div className="flex flex-col space-y-4 mb-4">
      <a
        href="https://magiceden.io"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex items-center space-x-2 no-underline"
      >
        <img src="/logos/melogo.png" alt="Magic Eden Logo" className="w-6 h-6" />
        <span>2022 - 2024 | Senior Software Engineer | Magic Eden</span>
      </a>
      <a
        href="https://soraschools.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex items-center space-x-2 no-underline"
      >
        <img src="/logos/sora-logo.png" alt="Sora Schools Logo" className="w-6 h-6" />
        <span>2021 - 2022 | Product Engineer | Sora Schools</span>
      </a>

      <a
        href="https://tc.tradersclub.com.br"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-65 text-accent-orange flex items-center space-x-2 no-underline"
      >
         <img src="/logos/tradersclub-logo.png" alt="Tradersclub Logo" className="w-6 h-6" />
        <span>2020 - 2021 | Senior Software Engineer | Tradesclub</span>
      </a>
    </div>
  );
}
