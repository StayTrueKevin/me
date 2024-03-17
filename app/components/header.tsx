import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useIsLoadingFirstTime } from '~/hooks/useIsLoadingFirstTime';

const Header = () => {
  const { setLoading } = useIsLoadingFirstTime();

  return (
    <header className="flex items-center justify-between px-8 py-4 z-10">
      <div className="flex items-center">
        <img src="/terminal.png" alt="Logo" className="h-10 mr-4" />
        <TypeAnimation
          sequence={[
            'Kevin',
            400,
            'Kevin Faveri',
            400,
            'Kevin Faveri | Portfolio',
            400,
            () => setLoading(),
          ]}
          wrapper="span"
          cursor={false}
          className="text-[14px] text-primary-green"
        />
      </div>
      <nav>
        <ul className="flex space-x-6 list-none">
          <li>
            <a href="https://github.com/kevinfaveri" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:opacity-60 transition-opacity">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="mailto:kevin@faveri.dev" className="text-primary-green hover:opacity-60 transition-opacity">
              <FaEnvelope size={24} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/kevinfaveri" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:opacity-60 transition-opacity">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kevfaveri" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:opacity-60 transition-opacity">
              <FaTwitter size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;