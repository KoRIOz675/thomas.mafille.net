import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { projectData } from '../content/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUpRightFromSquare, faCalendarAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projectData.find((p) => p.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-600">Project Not Found</h1>
        <p className="mb-8 text-lg text-gray-700">
          The project you are looking for does not exist or the link is incorrect.
        </p>
        <RouterLink to="/" className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Home
        </RouterLink>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-16">
      {' '}
      <div className="mb-8">
        <RouterLink to="/" className="inline-flex items-center text-blue-600 hover:underline">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to All Projects
        </RouterLink>
      </div>
      <article className="rounded-lg bg-white p-6 shadow-xl md:p-10">
        <img
          src={project.image}
          alt={`${project.name} showcase`}
          className="mx-auto mb-6 h-48 w-48 rounded-lg object-contain shadow-md md:h-64 md:w-64"
        />
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl">{project.name}</h1>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
            <span>{project.dates}</span>
          </div>
        </div>

        <div className="mb-6 text-center">
          {project.link && project.link !== project.githubLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              View Live Project <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" size="xs" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> View on GitHub{' '}
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" size="xs" />
            </a>
          )}
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-700">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-indigo-500" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-slate lg:prose-xl max-w-none">
          <h2 className="!mt-8 mb-3 text-2xl font-semibold text-gray-700">Project Overview</h2>
          <hr className="mb-6 border-gray-300" />
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.details}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
