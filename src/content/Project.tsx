import Projects from '../components/Projects';

export interface ProjectDataType {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink?: string;
  image: string;
  technologies: string[];
  dates: string;
  details: string;
  showGitHubLinkOnCard?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const projectData: ProjectDataType[] = [
  {
    slug: 'personal-website',
    name: 'Personal Website',
    description: 'My personal website showcasing my skills, projects, and experiences. You are currently viewing it!',
    link: 'https://thomas.mafille.net',
    githubLink: 'https://github.com/KoRIOz675/thomas.mafille.net',
    image: '/projects/portfolio.svg',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    dates: 'February 2024 - Present',
    showGitHubLinkOnCard: true,
    details: `
## Personal Portfolio Website

This is the source code for my personal website, designed to showcase my skills, projects, and professional journey as a software and web development student. The website is built with modern web technologies to provide a dynamic, responsive, and engaging user experience.

### ✨ Key Features

*   **Responsive Design:** Adapts to various screen sizes for optimal viewing on desktop, tablet, and mobile devices.
*   **Interactive Sections:**
    *   **Home:** An engaging landing page with an animated background.
    *   **About Me:** An introduction and a summary of my key skills and interests.
    *   **Tech Stack:** A dynamic display of technologies and software I'm proficient in, featuring marquee animations.
    *   **Projects:** A gallery of my projects with descriptions, technologies used, and links (including this one!).
    *   **Experience:** A timeline of my academic and professional background, including club involvements.
*   **Smooth Animations:** Subtle animations on scroll and hover to enhance user experience.
*   **Direct Links:** Easy access to my Resume, GitHub profile, and LinkedIn profile.
*   **Contact Information:** A quick link to contact me via email.

### 🛠️ Tech Stack

The project is built using the following technologies:

*   **Frontend:**
    *   React 19
    *   TypeScript
*   **Build Tool:**
    *   Vite
*   **Styling:**
    *   Tailwind CSS
    *   Custom CSS (for animations and specific styles in \`src/index.css\`)
*   **Icons:**
    *   FontAwesome
*   **Linting & Formatting:**
    *   ESLint
    *   Prettier (with \`prettier-plugin-tailwindcss\` for class sorting)
*   **Version Control:**
    *   Git & GitHub

### 🎨 Styling Approach

*   **Tailwind CSS:** Utilized for a utility-first CSS workflow, enabling rapid UI development.
*   **Custom CSS:** Global styles, custom animations (like marquees, pop-ins, gradient movements), and section dividers are defined in \`src/index.css\`.
*   **Prettier:** The \`prettier-plugin-tailwindcss\` is used to automatically sort Tailwind classes, ensuring consistency in the codebase.
`,
  },
  {
    slug: 'atlas-of-worlds',
    name: 'Atlas of Worlds',
    description: 'A web application for managing and visualizing lore and worldbuilding tools for TTRPGs.',
    link: 'https://github.com/Night-Breeze-Inn/Atlas-of-Worlds',
    githubLink: 'https://github.com/Night-Breeze-Inn/Atlas-of-Worlds',
    image: '/projects/atlasOfWorlds.png',
    technologies: ['React.js', 'Node.js', 'Neo4j', 'Vite', 'TypeScript', 'Express.js', 'JWT', 'Tailwind CSS'],
    dates: 'May 2025',
    showGitHubLinkOnCard: true,
    details: `
      ### Atlas of Worlds: Worldbuilding Tool
      
      This project aims to provide a comprehensive platform for TTRPG creators...
      (More content here)
    `,
  },
];

function ProjectListPage() {
  return (
    <div className="mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">My Projects</h1>
      <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {projectData.map((project, idx) => (
          <Projects
            key={project.slug}
            slug={project.slug}
            name={project.name}
            description={project.description}
            internalPageLink={`/projects/${project.slug}`}
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
