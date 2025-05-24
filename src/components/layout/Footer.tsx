function Footer() {
  return (
    <footer className="bg-gray-300 py-4 text-black">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mafille.net All rights reserved.
        </p>
      </div>
      <div className="container mx-auto mt-4 flex justify-center text-center">
        <a
          href="https://www.linkedin.com/in/thomasmafille/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <img
            src="/trademarks/InBug-Black.png"
            alt="LinkedIn Logo"
            className="h-8 w-8 transition-opacity duration-200 hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com/KoRIOz675"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src="/trademarks/github-mark.svg"
            alt="GitHub Logo"
            className="h-8 w-8 transition-opacity duration-200 hover:opacity-80"
          />
          <span className="sr-only">GitHub Repository</span>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
