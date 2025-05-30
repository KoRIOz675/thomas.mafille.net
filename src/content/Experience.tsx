import Experiences from '../components/Experiences';

function Experience() {
  const clubs = [
    {
      image: '/experiences/ludisep.svg',
      group: 'LudIsep',
      role: 'President of club',
      startDate: 'September 2024',
      endDate: 'July 2025',
      description:
        'Organization of new events in addition of the old ones. Creation of the Warhammer team. Team Management.',
    },
    {
      image: '/experiences/odm.svg',
      group: 'Ordre du Malt',
      role: 'President of the creation team',
      startDate: 'September 2024',
      endDate: 'July 2025',
      description: "Creation team management. Creation of the club's visuals.",
    },
    {
      image: '/experiences/igc.svg',
      group: 'Isep Gaming Club',
      role: 'Creation team member',
      startDate: 'September 2023',
      endDate: 'July 2025',
      description: "Creation of the club's visuals. See more on the Creation page of the website.",
    },
  ];
  const background = [
    {
      image: '/experiences/isep.svg',
      group: 'Isep',
      role: 'Master of Computer Engineering',
      startDate: 'September 2024',
      endDate: 'July 2027',
      description: 'Computer engineering degree in France. Full english curses.',
      link: 'https://www.isep.fr/en/',
    },
    {
      image: '/experiences/aep.svg',
      group: 'AEP, Assurance Epargne Pension',
      role: 'Vacation assistant',
      startDate: 'June 1st 2024',
      endDate: 'July 31st 2024',
      description: "Archiving and letters' sorting. Help in the creation of new procedures.",
      link: 'https://assurance-epargne-pension.fr',
    },
    {
      image: '/experiences/uwtsd.svg',
      group: 'UWTSD',
      role: 'Abroad semester',
      startDate: 'January 2024',
      endDate: 'July 2024',
      description: 'Semester abroad with computer forensics classes, networking classes.',
      link: 'https://www.uwtsd.ac.uk/',
    },
    {
      image: '/experiences/isep.svg',
      group: 'Isep',
      role: 'CII Anglophone',
      startDate: 'September 2022  ',
      endDate: 'July 2024',
      description: 'Bachelor degree in France in numeric and electronics. Full english curses.',
      link: 'https://www.isep.fr/en/',
    },
    {
      image: '/experiences/b2c.svg',
      group: 'Blanche de Castille',
      role: 'Student',
      startDate: '2009',
      endDate: 'July 2022',
      description: 'Primary and secondary school in France. French baccalaureate in 2022.',
      link: 'https://www.blanche-de-castille.fr',
    },
  ];
  return (
    <div className="experience-section-divider relative mx-auto mt-5 flex h-fit max-w-full flex-col items-center justify-center bg-gray-100 p-4 pt-20">
      <h1 className="mt-15 mb-4 text-2xl font-bold">Experiences</h1>
      <h2 className="mb-4 mt-4 text-xl">Clubs</h2>
      <div className="grid h-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {clubs.map((experience, index) => (
          <Experiences key={index} experiences={[experience]} />
        ))}
      </div>
      <h2 className="mb-4 mt-4 text-xl">Background</h2>
      <div className="grid h-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {background.map((experience, index) => (
          <Experiences key={index} experiences={[experience]} />
        ))}
      </div>
    </div>
  );
}
export default Experience;
