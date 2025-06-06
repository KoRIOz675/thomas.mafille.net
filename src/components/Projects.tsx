import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useInView from '../hooks/useInView';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  slug: string;
  name: string;
  description: string;
  internalPageLink: string;
  image: string;
  technologies: string[];
  dates: string;
  githubLink?: string;
  showGitHubLinkOnCard?: boolean;
  index?: number;
}

const Projects: React.FC<ProjectsProps> = ({
  name,
  description,
  internalPageLink,
  image,
  technologies,
  dates,
  githubLink,
  showGitHubLinkOnCard = true,
  index = 0,
}) => {
  const [cardRef, isCardInView] = useInView<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.15,
  });
  const baseTransitionClasses = 'transition-all duration-500 ease-out';
  const initialClasses = 'opacity-0 translate-y-4 scale-95';
  const visibleClasses = 'opacity-100 translate-y-0 scale-100';
  const chevronRightIcon = <FontAwesomeIcon icon={faChevronRight} />;
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;

  return (
    <div
      ref={cardRef}
      className={`min-h-120 flex flex-col items-center justify-start rounded-lg border-2 border-gray-300 p-4 shadow-lg ${baseTransitionClasses} ${isCardInView ? visibleClasses : initialClasses}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <img src={image} alt={name} className="mb-4 h-28 w-28 rounded-lg object-contain shadow-lg" loading="lazy" />
      <h1 className="mb-4 mt-4 text-center text-4xl font-bold">{name}</h1>
      <hr className="mb-2 mt-2 w-full border-gray-300" />
      <p className="text-center text-lg text-gray-600">{description}</p>
      <hr className="mb-2 mt-2 w-full border-gray-300" />
      <div className="mb-2 text-center text-sm text-gray-500">
        <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
      </div>
      <div className="mb-2 text-sm text-gray-500">
        <span className="font-semibold">Dates:</span> {dates}
      </div>
      <div className="mt-auto w-full pt-4 text-center">
        {' '}
        <Link
          to={internalPageLink}
          className="group mb-2 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          View Details
          <span className="ml-2 inline-block transition-transform duration-200 ease-in-out group-hover:translate-x-1">
            {chevronRightIcon}
          </span>
        </Link>
        {showGitHubLinkOnCard && githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex w-full items-center justify-center rounded-md border border-gray-700 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <span className="mr-2">{githubIcon}</span>
            View on GitHub
            <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2 opacity-70 group-hover:opacity-100" size="xs" />
          </a>
        )}
      </div>
    </div>
  );
};
export default Projects;
