import AboutProps from '../components/skills';
import useInView from '../hooks/useInView';

function About() {
  const [helloRef, isHelloInView] = useInView<HTMLHeadingElement>({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [p1Ref, isP1InView] = useInView<HTMLParagraphElement>({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [p2Ref, isP2InView] = useInView<HTMLParagraphElement>({
    triggerOnce: true,
    threshold: 0.2,
  });
  const baseTransitionClasses = 'transition-all duration-700 ease-out';
  const initialClasses = 'opacity-0 translate-y-5';
  const skills = [
    'Frontend Technologies',
    'Backend Technologies',
    'Web Development',
    'Software Development',
    'Database Management',
    'Version Control',
    'Agile Methodologies',
    'UI/UX Design Principles',
    'Problem Solving and Critical Thinking',
  ];

  return (
    <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">About Me</h2>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="row-span-1 mb-2 p-4 text-lg md:col-span-2">
          <h2
            ref={helloRef}
            className={`mb-2 text-xl font-semibold ${baseTransitionClasses} ${
              isHelloInView ? 'translate-y-0 opacity-100' : initialClasses
            }`}
          >
            Hello!
          </h2>
          <p
            ref={p1Ref}
            className={`${baseTransitionClasses} delay-200 ${
              isP1InView ? 'translate-y-0 opacity-100' : initialClasses
            }`}
          >
            I am a Master's student at{' '}
            <a
              href="https://www.isep.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Isep
            </a>{' '}
            in Paris, France, specializing in software and web development. I am mostly focused on frontend development,
            but I also have a solid understanding of backend technologies and software architecture.
          </p>
          <p
            ref={p2Ref}
            className={`mt-2 text-gray-500 ${baseTransitionClasses} delay-300 ${
              isP2InView ? 'translate-y-0 opacity-100' : initialClasses
            }`}
          >
            I have a passion for creating efficient and user-friendly software solutions. My interests include web
            development, software architecture, and exploring new technologies.
          </p>
        </div>
        <div className="mb-2 rounded-lg border-2 border-gray-300 p-4 text-lg shadow-lg md:col-span-1">
          <h2 className="mb-2 text-xl font-semibold">Skills and interests</h2>
          <AboutProps skills={skills} />
        </div>
      </div>
    </div>
  );
}
export default About;
