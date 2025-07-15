import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUpRightFromSquare, faCalendarAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../sanityClient';
import type { ProjectDataType } from '../content/Project';

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();

  const [project, setProject] = useState<ProjectDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = `*[_type == "project" && slug.current == $slug][0]`;
    const params = { slug: projectSlug };

    const fetchProject = async () => {
      try {
        const data = await client.fetch<ProjectDataType>(query, params);
        if (data) {
          setProject(data);
        } else {
          setError('Project not found.');
        }
      } catch (err) {
        console.error('Failed to fetch project:', err);
        setError('Could not load project details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectSlug]);

  // --- Loading and Error States ---
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
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

  // --- Render the Project ---
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-16">
      <div className="mb-8">
        <RouterLink to="/" className="inline-flex items-center text-blue-600 hover:underline">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to All Projects
        </RouterLink>
      </div>
      <article className="rounded-lg bg-white p-6 shadow-xl md:p-10">
        <img
          src={urlFor(project.image).width(400).url()}
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

        {project.technologies && project.technologies.length > 0 && (
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
        )}

        <div className="prose prose-slate max-w-none lg:prose-xl">
          <h2 className="!mt-8 mb-3 text-2xl font-semibold text-gray-700">Project Overview</h2>
          <hr className="mb-6 border-gray-300" />
          <PortableText value={project.details} />
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
