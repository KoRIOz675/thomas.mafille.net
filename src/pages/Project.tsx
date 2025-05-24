import Projects from '../components/Projects';

function Project() {
  return (
    <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">My Projects</h1>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        <Projects
          name="Portfolio Website"
          description="A personal portfolio website showcasing my skills, projects, and experiences."
          link="https://github.com/KoRIOz675/thomas.mafille.net"
          image="/projects/portfolio.svg"
          technologies={['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']}
          dates="2023"
        />
      </div>
    </div>
  );
}
export default Project;
