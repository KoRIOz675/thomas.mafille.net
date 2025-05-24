function Home() {
  return (
    <div className="home-section-divider animated-gradient-bg relative flex h-150 flex-col items-center justify-center bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 bg-[length:300%_100%] text-slate-800">
      <h1 className="mb-4 text-center text-4xl font-bold">Thomas MAFILLE</h1>
      <h2 className="mb-2 text-center text-2xl">Web and Software Development Focus</h2>
      <p className="px-5 text-center text-lg text-gray-600 md:px-0">
        Studying computer science at{' '}
        <a
          href="https://www.isep.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Isep
        </a>{' '}
        in Paris.
      </p>
    </div>
  );
}
export default Home;
