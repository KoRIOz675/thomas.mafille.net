import { useState, useEffect } from 'react';
import Proficiencies from '../components/Proficiencies';
import WavyBackground from '../components/WavyBackground';
import { client } from '../sanityClient';

interface TechDataType {
  skills: string[];
  software: string[];
}

function Tech() {
  const [techData, setTechData] = useState<TechDataType>({ skills: [], software: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "tech" && _id == "tech"][0]`;

    const fetchTech = async () => {
      const data = await client.fetch<TechDataType>(query);
      if (data) {
        setTechData(data);
      }
      setIsLoading(false);
    };

    fetchTech().catch(console.error);
  }, []);

  return (
    <div className="relative mx-auto flex h-full max-w-full flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 z-0">
        <WavyBackground />
      </div>
      <div className="z-10 mx-auto flex h-full max-w-full flex-col items-center justify-center p-4">
        <h2 className="mb-4 text-2xl font-bold">My Tech Stack</h2>
        <div className="mb-4 grid h-full max-w-5xl grid-cols-1 gap-4">
          <div className="mb-2 p-4 text-lg">
            <p className="mb-2 text-center">
              I am proficient in a variety of technologies that help me build efficient and scalable applications. Here
              are some of the key technologies I work with:
            </p>
          </div>
          {isLoading ? (
            <p className="text-center">Loading tech stack...</p>
          ) : (
            <div className="mb-2 p-4 text-lg">
              <Proficiencies skills={techData.skills} classAnimation="animate-marquee-move-left" />
              <div className="mb-2 mt-4 p-4 text-lg">
                <Proficiencies skills={techData.software} classAnimation="animate-marquee-move-right" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Tech;
