function Header() {
  return (
    <header className="flex flex-col items-center bg-gray-300 p-4 text-black md:flex-row md:justify-around">
      <a href="/" className="text-2xl font-bold">
        <img
          src="/logo/logo.svg"
          alt="Logo"
          className="mr-2 inline-block h-16"
        />
      </a>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-2">
        <a
          href="https://github.com/KoRIOz675/thomas.mafille.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github/github-mark.svg"
            alt="GitHub Logo"
            className="h-8 w-8"
          />
          <span className="sr-only">GitHub Repository</span>
        </a>
      </div>
    </header>
  );
}
export default Header;
