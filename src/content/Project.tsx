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
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'FontAwesome', 'ESLint', 'Prettier'],
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
## Atlas-of-Worlds

Atlas of Worlds is a comprehensive worldbuilding and lore management tool designed to help creators organize, develop, and visualize their fictional universes.

This application provides a platform for writers, game developers, and hobbyists to meticulously craft every aspect of their worlds. From intricate character backstories and complex faction politics to detailed geographical locations and historical events, Atlas of Worlds aims to be the central hub for all your creative endeavors. It uses a powerful graph database (Neo4j) to manage the interconnectedness of your world's elements, ensuring a rich and cohesive experience.

### ✨ Key Features

*   **Entry Creation**: Create "articles" or "nodes" for different elements:
    *   Worlds
    *   Locations
    *   Characters
    *   Factions
    *   Items
    *   Events
    *   Concepts (e.g., magic systems, technologies)
    *   Date Entries (Eras, Timelines)
*   **Rich Text Editing**: For detailed descriptions, histories, notes (future integration with TipTap).
*   **Customizable Templates/Fields**: Allow users to define specific fields for different entry types (e.g., a "Character" template might have fields for "Aliases," "Affiliation," "Appearance").
*   **Interlinking**: Easily link entries to each other, forming complex relationships (e.g., "Character X" is a \`MEMBER_OF\` "Faction Y," "Location A" is \`LOCATED_IN\` "Region B").
*   **Graph-Based Relationships**: Leverage Neo4j to define and query intricate connections between any two entities.
*   **Tagging & Categorization**: For organization and filtering.
*   **User Authentication**: Secure user accounts and data.
*   **Search & Filtering**: Powerful search to find information quickly (future integration with MeiliSearch).
*   **Visualizations (Advanced/Future)**: Relationship maps/graphs, timelines.
*   **Permissions/Collaboration (Advanced/Future)**: Allow multiple users to contribute to a world, with different access levels.

### 🛠️ Tech Stack
*   **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
*   **Backend**: Node.js, Express.js
*   **Database**: Neo4j (Graph Database)
*   **Authentication**: JWT (JSON Web Tokens)
*   **State Management**: React Context API
*   **Styling**: Tailwind CSS for utility-first styling
*   **Linting & Formatting**: ESLint, Prettier
*   **Version Control**: Git & GitHub

### 🎨 Styling Approach
The project uses Tailwind CSS for styling, providing a utility-first approach to design. This allows for rapid development and easy customization of the UI.
Global styles and Tailwind directives are imported in \`src/index.css\`. Custom styles, such as animations and specific component styles, are also defined in this file.
    `,
  },
  {
    slug: 'night-breeze-inn',
    name: 'NightBreeze Inn',
    description: 'The official website for the Night Breeze Inn, a group for TTRPG enthusiasts.',
    link: 'https://night-breeze-inn.github.io',
    image: '/projects/logoNBI.png',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'TypeScript'],
    dates: 'May 2025',
    githubLink: 'https://github.com/Night-Breeze-Inn/night-breeze-inn.github.io',
    showGitHubLinkOnCard: true,
    details: `
## Night Breeze Inn Website

This is the official website for the Night Breeze Inn, a modern web application built with React, TypeScript, Vite, and Tailwind CSS. It provides a clean and responsive interface for users to learn about the inn and get in touch.

### ✨ Features

- **Responsive Design:** Adapts to various screen sizes using Tailwind CSS.
- **Modern Tech Stack:** Built with React, TypeScript, and Vite for a fast and efficient development experience.
- **Component-Based Architecture:** Organized into reusable React components.
- **Styling with Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Iconography:** Uses Font Awesome for clear and consistent icons.
- **Linting & Formatting:** Configured with ESLint and Prettier for code quality and consistency.

### 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Font Awesome
- **Linting:** ESLint
- **Formatting:** Prettier

### 🎨 Styling

The project uses Tailwind CSS for styling.

- Global styles and Tailwind directives are imported in \`src/index.css\`.
- Custom Tailwind theme (colors, fonts) is defined in \`tailwind.config.cjs\`.
- A custom \`.active\` class for navigation links is defined in \`src/index.css\`.
`,
  },
  {
    slug: 'draconae-project',
    name: 'Draconae Project',
    description: 'A digital companion for creating and managing Dungeons & Dragons 5th Edition characters.',
    link: 'https://github.com/Night-Breeze-Inn/Draconae-Project',
    githubLink: 'https://github.com/Night-Breeze-Inn/Draconae-Project',
    image: '/projects/draconaeProject.svg',
    technologies: ['Java', 'JavaFX', 'Maven'],
    dates: 'May 2025',
    showGitHubLinkOnCard: true,
    details: `
## Draconae Project

**Draconae** is a desktop application designed to streamline the creation and management of your Dungeons & Dragons 5th Edition characters. Whether you're a seasoned adventurer or new to the realms, Draconae aims to be an intuitive tool for your campaigns.

### ✨ Core Features

Draconae is being developed to include the following key functionalities:

- **Character Creation:** Build your unique hero from the ground up.
- **Character Persistence:** Saving and loading character data locally.
- **Health Management:** Track hit points, temporary HP, and apply damage seamlessly (Planned).
- **Spellcasting:** Manage spell lists and available spell slots (Planned).
- **Death Saves:** Keep track of those crucial life-or-death rolls (Planned).
- **Ability & Skill Checks:** Perform saving throws, basic ability checks, and skill tests (Planned).
- **Combat Rolls:** Make attack and damage rolls with ease (Planned).

### 🛠️ Tech Stack

- **Frontend:** JavaFX for a rich desktop UI.
- **Backend:** Java for application logic.
- **Build Tool:** Maven for dependency management and project structure.
- **Version Control:** Git for source code management.
- **Data Handling:** Jackson for JSON serialization/deserialization.
- **UI Design:** SceneBuilder for drag-and-drop UI design.
- **UI Components:** AtlantaFX for enhanced JavaFX components.
`,
  },
  {
    slug: 'cbsm-eu',
    name: 'CBSM.eu',
    description: "A website for formations on commercial offers' management and customer projects' management.",
    link: 'https://cbsm.eu',
    image: '/projects/cbsm.png',
    technologies: ['HTML5', 'JavaScript', 'CSS3'],
    dates: 'May 2024',
    showGitHubLinkOnCard: false,
    details: `A website for formations on commercial offers' management and customer projects' management.

All right reserved to CBSM.eu.  `,
  },
  {
    slug: 'neko-task-manager',
    name: 'Task Manager',
    description: 'Development of a collaborative task management tool, inspired by the Kanban method.',
    link: 'https://github.com/KoRIOz675/tache-colaborative',
    githubLink: 'https://github.com/KoRIOz675/tache-colaborative',
    image: '/projects/nekoTaskManager.png',
    technologies: ['Java', 'JavaFX', 'MySQL'],
    dates: 'October 2024 to December 2024',
    showGitHubLinkOnCard: true,
    details: `
Development of a collaborative task management tool, inspired by the Kanban method.
Made with Java, JavaFX, and MySQL.
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
