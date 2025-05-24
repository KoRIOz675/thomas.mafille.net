import AboutProps from '../components/skills';

function About() {
  return (
    <div
      id="About-Section"
      className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4"
    >
      <h1 className="mb-4 text-2xl font-bold">About Me</h1>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="row-span-1 mb-2 p-4 text-lg md:col-span-2">
          <h2 className="mb-2 text-xl font-semibold">Hello!</h2>
          <p>
            I am Master's student at{' '}
            <a
              href="https://www.isep.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Isep
            </a>{' '}
            in Paris, France, specializing in software and web engineering.
          </p>
          <p className="mt-2 text-gray-500">
            I have a passion for creating efficient and user-friendly software
            solutions. My interests include web development, software
            architecture, and exploring new technologies.
          </p>
        </div>
        <div className="mb-2 rounded-lg border-2 border-gray-300 p-4 text-lg shadow-lg md:col-span-1">
          <h2 className="mb-2 text-xl font-semibold">Skills and interests</h2>
          <AboutProps
            skills={[
              'Frontend Technologies',
              'Backend Technologies',
              'Web Development',
              'Software Development',
              'Database Management',
              'Version Control',
              'Agile Methodologies',
              'UI/UX Design Principles',
              'Problem Solving and Critical Thinking',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default About;
