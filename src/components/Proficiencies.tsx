import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

interface ProficienciesProps {
  skills: string[];
  classAnimation?: string;
  slowAnimationValue?: number;
}

const Proficiencies: React.FC<ProficienciesProps> = ({ skills, classAnimation, slowAnimationValue = 0.3 }) => {
  const extendedSkills = [...skills, ...skills];
  const animatedDivRef = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<Animation | null>(null);

  useEffect(() => {
    const currentAnimatedDiv = animatedDivRef.current;

    if (currentAnimatedDiv) {
      const MIGHT_BE_NEEDED_TIMEOUT = 10;

      const setupAnimationController = () => {
        const animations = currentAnimatedDiv.getAnimations();
        if (animations && animations.length > 0) {
          animationInstanceRef.current = animations[0];
        } else {
          console.warn('Marquee animation not found for:', classAnimation, 'after attempt.');
        }
      };

      setupAnimationController();

      let retryTimeoutId: NodeJS.Timeout | undefined = undefined;

      if (!animationInstanceRef.current) {
        retryTimeoutId = setTimeout(setupAnimationController, MIGHT_BE_NEEDED_TIMEOUT);
      }

      const handleMouseEnter = () => {
        if (animationInstanceRef.current) {
          animationInstanceRef.current.playbackRate = slowAnimationValue;
        }
      };

      const handleMouseLeave = () => {
        if (animationInstanceRef.current) {
          animationInstanceRef.current.playbackRate = 1.0;
        }
      };

      currentAnimatedDiv.addEventListener('mouseenter', handleMouseEnter);
      currentAnimatedDiv.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (retryTimeoutId) {
          clearTimeout(retryTimeoutId);
        }
        currentAnimatedDiv.removeEventListener('mouseenter', handleMouseEnter);
        currentAnimatedDiv.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [classAnimation, slowAnimationValue]);

  return (
    <div className="w-full max-w-5xl overflow-hidden py-2">
      {' '}
      {/* Viewport */}
      <div ref={animatedDivRef} className={`${classAnimation} [will-change:transform]`}>
        <div className="flex flex-nowrap">
          {extendedSkills.map((skill, index) => (
            <p key={index} className="flex-shrink-0 px-4 py-1 text-lg whitespace-nowrap text-gray-700">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proficiencies;
