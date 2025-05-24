import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useInView from '../hooks/useInView';

interface ProjectsProps {
  name: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
  dates: string;
  github?: boolean;
  index?: number;
}

const Projects: React.FC<ProjectsProps> = ({
  name,
  description,
  link,
  image,
  technologies,
  dates,
  github = true,
  index = 0,
}) => {
  const [cardRef, isCardInView] = useInView<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.15,
  });
  const baseTransitionClasses = 'transition-all duration-500 ease-out';
  const initialClasses = 'opacity-0 translate-y-4 scale-95';
  const visibleClasses = 'opacity-100 translate-y-0 scale-100';
  const linkImage = <FontAwesomeIcon icon={faUpRightFromSquare} />;

  return (
    <div
      ref={cardRef}
      className={`flex h-120 flex-col items-center justify-start rounded-lg border-2 border-gray-300 p-4 shadow-lg ${baseTransitionClasses} ${isCardInView ? visibleClasses : initialClasses}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <img src={image} alt={name} className="mb-4 h-28 w-28 rounded-lg object-contain shadow-lg" loading="lazy" />
      <h1 className="mt-4 mb-4 text-center text-4xl font-bold">{name}</h1>
      <hr className="mt-2 mb-2 w-full border-gray-300" />
      <p className="text-center text-lg text-gray-600">{description}</p>
      <hr className="mt-2 mb-2 w-full border-gray-300" />
      <div className="mb-2 text-center text-sm text-gray-500">
        <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
      </div>
      <div className="mb-2 text-sm text-gray-500">
        <span className="font-semibold">Dates:</span> {dates}
      </div>
      <div className="mt-4 text-center text-blue-600">
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block hover:underline">
          {github ? <>View Project on github. {linkImage}</> : <>View Project. {linkImage}</>}
        </a>
      </div>
    </div>
  );
};
export default Projects;
