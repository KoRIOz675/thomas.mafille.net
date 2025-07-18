import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSettings } from '../../context/SettingsContext';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { resumeUrl } = useSettings();

  const resumeButtonClasses =
    'rounded-2xl border-2 border-dotted border-red-950 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-red-950 hover:text-white';
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-black';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex max-h-32 flex-col items-center bg-slate-300 p-4 text-black transition-shadow duration-300 ease-in-out md:max-h-16 md:flex-row md:justify-between md:px-8 md:py-2 ${
        scrolled ? 'shadow-lg shadow-gray-400' : ''
      }`}
    >
      <img src="/logo/logo.svg" alt="Logo" className="mr-2 inline-block h-10 w-10 rounded-full" />
      <nav className="mb-2 mt-4 flex w-full justify-center md:mt-2 md:w-auto">
        <ul className="flex space-x-4">
          <li>
            <a
              href="mailto:thomas@mafille.net"
              className="rounded-2xl border-2 border-dotted border-blue-950 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-blue-950 hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={resumeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`${resumeButtonClasses} ${!resumeUrl ? disabledClasses : ''}`}
              onClick={(e) => !resumeUrl && e.preventDefault()}
              aria-disabled={!resumeUrl}
            >
              Resume
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="https://github.com/KoRIOz675/thomas.mafille.net"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-2 border-dotted border-green-950 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-green-950 hover:text-white"
            >
              Source Code
            </a>
          </li>
          <li className="block md:hidden">
            <a
              href="https://github.com/KoRIOz675/thomas.mafille.net"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-2 border-dotted border-green-950 px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-yellow-950 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
