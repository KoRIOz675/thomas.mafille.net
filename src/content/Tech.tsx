import Proficiencies from '../components/Proficiencies';
import WavyBackground from '../components/WavyBackground';

function Tech() {
  const skills = [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Spring Boot',
    'Java',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Neo4j',
    'Markdown',
    'PyGame',
    'JavaFX',
    'Maven',
    'Vite',
    'Prettier',
    'ESLint',
    'JWT',
  ];
  const softwares = [
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'InteliJ IDEA',
    'Visual Studio Code',
    'Figma',
    'Postman',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Aseprite',
    'Canva',
    'Microsoft Office',
    'Google Workspace',
    'Slack',
  ];
  return (
    <div className="relative mx-auto flex h-full max-w-full flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 z-0">
        {' '}
        <WavyBackground />
      </div>
      <div className="z-10 mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-2xl font-bold">My Tech Stack</h1>
        <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4">
          <div className="mb-2 p-4 text-lg">
            <p className="mb-2 text-center">
              I am proficient in a variety of technologies that help me build efficient and scalable applications. Here
              are some of the key technologies I work with:
            </p>
          </div>
          <div className="mb-2 p-4 text-lg">
            <Proficiencies skills={skills} classAnimation="animate-marquee-move-left" />
            <div className="mb-2 mt-4 p-4 text-lg">
              <Proficiencies skills={softwares} classAnimation="animate-marquee-move-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tech;
