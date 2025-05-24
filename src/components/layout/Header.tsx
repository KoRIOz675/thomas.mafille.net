function Header() {
  return (
    <header className="sticky top-0 flex max-h-32 flex-col items-center bg-gray-300 p-4 text-black md:max-h-16 md:flex-row md:justify-between md:px-8 md:py-2">
      <a href="/" className="text-2xl font-bold">
        <img
          src="/logo/logo.svg"
          alt="Logo"
          className="mr-2 inline-block h-10 w-10 transition-opacity duration-200 hover:opacity-80"
        />
        <span className="hidden text-sm font-normal md:inline">
          thomas.mafille.net
        </span>
      </a>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KoRIOz675/thomas.mafille.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/trademarks/github-mark.svg"
                alt="GitHub Logo"
                className="h-6 transition-opacity duration-200 hover:opacity-80"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
