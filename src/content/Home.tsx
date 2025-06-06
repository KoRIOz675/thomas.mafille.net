import FlyingNumbersBackground from '../components/FlyingNumbersBackground';

function Home() {
  return (
    <div className="home-section-divider animated-gradient-bg relative flex h-80 flex-col items-center justify-center bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200 bg-[length:300%_100%] text-slate-800">
      <FlyingNumbersBackground count={80} className="absolute inset-0 z-0" />
      <h1 className="z-10 mb-4 text-center text-4xl font-bold">Thomas MAFILLE</h1>
      <h2 className="z-10 mb-2 text-center text-2xl">Web and Software Development Focus</h2>
      <p className="z-10 px-5 text-center text-lg text-gray-600 md:px-0">
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
