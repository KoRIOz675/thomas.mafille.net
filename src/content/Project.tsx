import { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import { client } from '../sanityClient';
import type { Image, PortableTextBlock } from 'sanity';
export interface ProjectDataType {
  _id: string;
  slug: { current: string };
  name: string;
  description: string;
  link?: string;
  githubLink?: string;
  image: Image;
  technologies: string[];
  dates: string;
  details: PortableTextBlock[];
  showGitHubLinkOnCard?: boolean;
}

function ProjectListPage() {
  const [projects, setProjects] = useState<ProjectDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = `*[_type == "project"] | order(displayOrder asc)`;

    const fetchProjects = async () => {
      try {
        const data = await client.fetch<ProjectDataType[]>(query);
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Could not load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <Projects
            key={project._id}
            slug={project.slug.current}
            name={project.name}
            description={project.description}
            internalPageLink={`/projects/${project.slug.current}`}
            image={project.image}
            technologies={project.technologies}
            dates={project.dates}
            showGitHubLinkOnCard={project.showGitHubLinkOnCard}
            githubLink={project.githubLink}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectListPage;
