import Proficiencies from '../components/Proficiencies';

function Tech() {
  return (
    <div
      id="Tech-Section"
      className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4"
    >
      <h1 className="mb-4 text-2xl font-bold">My Tech Stack</h1>
      <div>
        <div className="mb-2 max-w-5xl p-4 text-lg">
          <p className="mb-2 text-center">
            I am proficient in a variety of technologies that help me build
            efficient and scalable applications. Here are some of the key
            technologies I work with:
          </p>
        </div>
        <div className="mb-2p-4 text-lg">
          <Proficiencies
            skills={[
              'React.js',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'HTML',
              'CSS',
              'JavaScript',
              'Tailwind CSS',
              'Spring Boot',
              'Java',
              'Python',
              'PostgreSQL',
              'MySQL',
              'Neo4j',
              'Markdown',
            ]}
            classAnimation="animate-marquee-move-left"
          />
          <div className="mb-2 p-4 text-lg">
            <Proficiencies
              skills={[
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
              ]}
              classAnimation="animate-marquee-move-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tech;
