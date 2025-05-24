function Header() {
  return (
    <header className="bg-gray-200 text-black p-4 dark:bg-gray-800 dark:text-gray-200">
      <a href="/" className="text-2xl font-bold">
        <img
          src="/logo/logo.svg"
          alt="Logo"
          className="inline-block h-16 mr-2"
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
    </header>
  );
}
export default Header;
