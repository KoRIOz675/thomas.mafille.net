import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useInView from '../hooks/useInView';

interface ExperiencesProps {
  experiences: {
    image?: string;
    group: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    link?: string;
  }[];
}

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  const [cardRef, isCardInView] = useInView<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.15,
  });
  const baseTransitionClasses = 'transition-all duration-500 ease-out';
  const initialClasses = 'opacity-0 translate-y-4 scale-95';
  const visibleClasses = 'opacity-100 translate-y-0 scale-100';
  const upRightIcon = <FontAwesomeIcon icon={faUpRightFromSquare} />;
  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={index}
          ref={cardRef}
          className={`flex h-70 flex-col items-center justify-start rounded-lg border-2 border-gray-300 p-4 text-center shadow-lg ${baseTransitionClasses} ${isCardInView ? visibleClasses : initialClasses}`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {exp.image && <img src={exp.image} alt={`${exp.group} logo`} className="mb-2 h-12 w-12 object-contain" />}
          <h3 className="text-lg font-semibold">{exp.role}</h3>
          <p className="text-md text-gray-800">{exp.group}</p>
          <p className="text-sm text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <p className="max-h-50 overflow-hidden">{exp.description}</p>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center text-blue-600 hover:underline"
            >
              Learn More
              <span className="ml-1 inline-block transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
                {upRightIcon}
              </span>
            </a>
          )}
        </div>
      ))}
    </>
  );
};
export default Experiences;
