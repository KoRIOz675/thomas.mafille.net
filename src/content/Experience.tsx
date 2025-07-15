import { useState, useEffect } from 'react';
import Experiences from '../components/Experiences';
import { client, urlFor } from '../sanityClient';
import type { Image } from 'sanity';

export interface ExperienceDataType {
  _id: string;
  role: string;
  group: string;
  type: 'club' | 'background';
  image?: Image;
  startDate: string;
  endDate: string;
  description: string;
  link?: string;
}

interface MappedExperience {
  image?: string;
  group: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  link?: string;
}

function Experience() {
  const [clubs, setClubs] = useState<MappedExperience[]>([]);
  const [background, setBackground] = useState<MappedExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "experience"] | order(startDate desc)`;

    const fetchExperiences = async () => {
      const data = await client.fetch<ExperienceDataType[]>(query);

      // Map the raw Sanity data to the format our component expects
      const mappedData = data.map((exp) => ({
        ...exp,
        // Use urlFor to get a usable image URL string, or undefined if no image
        image: exp.image ? urlFor(exp.image).width(100).url() : undefined,
      }));

      // Filter the mapped data into two separate arrays
      setClubs(mappedData.filter((exp) => exp.type === 'club'));
      setBackground(mappedData.filter((exp) => exp.type === 'background'));

      setIsLoading(false);
    };

    fetchExperiences().catch(console.error);
  }, []);

  if (isLoading) {
    return (
      <div className="experience-section-divider relative mx-auto mt-5 flex h-fit max-w-full flex-col items-center justify-center bg-gray-100 p-4 pt-20">
        <h1 className="mt-15 mb-4 text-2xl font-bold">Experiences</h1>
        <p>Loading experiences...</p>
      </div>
    );
  }

  return (
    <div className="experience-section-divider relative mx-auto mt-5 flex h-fit max-w-full flex-col items-center justify-center bg-gray-100 p-4 pt-20">
      <h1 className="mt-15 mb-4 text-2xl font-bold">Experiences</h1>

      {clubs.length > 0 && (
        <>
          <h2 className="mb-4 mt-4 text-xl">Clubs</h2>
          <div className="grid h-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
            {clubs.map((experience) => (
              <Experiences key={experience.role + experience.group} experiences={[experience]} />
            ))}
          </div>
        </>
      )}

      {background.length > 0 && (
        <>
          <h2 className="mb-4 mt-4 text-xl">Background</h2>
          <div className="grid h-full max-w-5xl grid-cols-1 gap-4 p-4 md:grid-cols-3">
            {background.map((experience) => (
              <Experiences key={experience.role + experience.group} experiences={[experience]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Experience;
