import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface AboutProps {
  skills: string[];
}

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <ul className="list-outside space-y-2 pl-4 text-sm text-gray-700">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <i className="mr-2 text-green-500">
            <FontAwesomeIcon icon={faCheck} />
          </i>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default About;
