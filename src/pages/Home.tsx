function Home() {
  return (
    <div className="flex h-150 flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-4xl font-bold">Thomas MAFILLE</h1>
      <h2 className="mb-2 text-center text-2xl">
        Web and Software Development Focus
      </h2>
      <p className="text-center text-lg text-gray-600">
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
