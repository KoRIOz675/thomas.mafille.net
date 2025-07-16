import React, { memo } from 'react';
import useInView from '../hooks/useInView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface SkillItemProps {
  skill: string;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = memo(({ skill, index }) => {
  const [itemRef, isItemInView] = useInView<HTMLLIElement>({
    triggerOnce: true,
    threshold: 0.1,
  });
  const textBaseTransition = 'transition-all duration-500 ease-out';
  const textInitialClasses = 'opacity-0 translate-x-[-10px]';
  const iconBaseTransition = 'transition-all duration-300 ease-out';
  const iconInitialClasses = 'opacity-0 scale-50';
  const iconVisibleClasses = 'opacity-100 scale-100';
  const staggerDelay = `${index * 100}ms`;

  return (
    <li
      ref={itemRef}
      className="flex items-center"
      style={{
        transitionDelay: isItemInView ? staggerDelay : '0ms',
      }}
    >
      <i
        className={`mr-2 text-green-500 ${
          isItemInView ? iconVisibleClasses : iconInitialClasses
        } ${iconBaseTransition}`}
        style={{ transitionDelay: isItemInView ? `${index * 100 + 100}ms` : '0ms' }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </i>
      <span
        className={`${textBaseTransition} ${isItemInView ? 'translate-x-0 opacity-100' : textInitialClasses}`}
        style={{ transitionDelay: isItemInView ? staggerDelay : '0ms' }}
      >
        {skill}
      </span>
    </li>
  );
});

interface AboutProps {
  skills: string[];
}

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <ul className="list-outside space-y-2 pl-4 text-sm text-gray-700">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} index={index} />
      ))}
    </ul>
  );
};

export default About;
