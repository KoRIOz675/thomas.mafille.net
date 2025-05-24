import React from 'react';

interface ProjectsProps {
  name: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
  dates: string;
}

const Projects: React.FC<ProjectsProps> = ({
  name,
  description,
  link,
  image,
  technologies,
  dates,
}) => {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-gray-300 p-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="mb-4 h-28 w-28 rounded-lg object-cover shadow-lg"
        loading="lazy"
      />
      <div className="mb-2 text-sm text-gray-500">
        <span className="font-semibold">Technologies:</span>{' '}
        {technologies.join(', ')}
      </div>
      <div className="mb-2 text-sm text-gray-500">
        <span className="font-semibold">Dates:</span> {dates}
      </div>
      <h1 className="mb-4 text-center text-4xl font-bold">{name}</h1>
      <p className="text-lg text-gray-600">{description}</p>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:underline"
        >
          View Project on github.
        </a>
      </div>
    </div>
  );
};
export default Projects;
