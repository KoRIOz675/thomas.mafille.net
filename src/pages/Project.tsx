import Projects from '../components/Projects';

function Project() {
  const projectData = [
    {
      name: 'Website',
      description: 'A personal website showcasing my skills, projects, and experiences.',
      link: 'https://github.com/KoRIOz675/thomas.mafille.net',
      image: '/projects/portfolio.svg',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      dates: 'February 2024',
    },
    {
      name: 'Atlas of Worlds',
      description: 'A web application for managing and visualizing lore and worldbuilding tools for TTRPGs.',
      link: 'https://github.com/Night-Breeze-Inn/Atlas-of-Worlds',
      image: '/projects/atlasOfWorlds.png',
      technologies: ['React.js', 'Node.js', 'Neo4j', 'Vite', 'TypeScript', 'Express.js', 'JWT', 'Tailwind CSS'],
      dates: 'May 2025',
    },
    {
      name: 'NightBreeze Inn',
      description: 'The official website for the Night Breeze Inn, a group for TTRPG enthusiasts.',
      link: 'https://night-breeze-inn.github.io',
      image: '/projects/logoNBI.png',
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'TypeScript'],
      dates: 'May 2025',
      github: false,
    },
    {
      name: 'Draconae Project',
      description: 'A digital companion for creating and managing Dungeons & Dragons 5th Edition characters.',
      link: 'https://github.com/Night-Breeze-Inn/Draconae-Project',
      image: '/projects/draconaeProject.svg',
      technologies: ['Java', 'JavaFX', 'Maven'],
      dates: 'May 2025',
    },
    {
      name: 'CBSM.eu',
      description: "A website for formations on commercial offers' management and customer projects' management.",
      link: 'https://cbsm.eu',
      image: '/projects/cbsm.png',
      technologies: ['HTML5', 'JavaScript', 'CSS3'],
      dates: 'May 2024',
      github: false,
    },
    {
      name: 'Task Manager',
      description: 'Development of a collaborative task management tool, inspired by the Kanban method.',
      link: 'https://github.com/KoRIOz675/tache-colaborative',
      image: '/projects/nekoTaskManager.png',
      technologies: ['Java', 'JavaFX', 'MySQL'],
      dates: 'October 2024 to December 2024',
    },
  ];

  return (
    <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">My Projects</h1>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {projectData.map((project, idx) => (
          <Projects
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            image={project.image}
            technologies={project.technologies}
            dates={project.dates}
            github={project.github}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
export default Project;
