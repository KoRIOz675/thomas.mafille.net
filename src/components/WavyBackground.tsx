import React, { useEffect, useRef, useState } from 'react';

interface WaveConfig {
  color: string;
  amplitude: number;
  frequency: number;
  phaseShift: number;
  speed: number;
  strokeWidth?: number;
}

interface WavyBackgroundProps {
  className?: string;
  numPoints?: number;
  wavesConfig?: WaveConfig[];
}

const defaultWaves: WaveConfig[] = [
  { color: 'rgba(199, 210, 254, 0.5)', amplitude: 30, frequency: 0.02, phaseShift: 0, speed: 0.005, strokeWidth: 1.5 },
  {
    color: 'rgba(191, 219, 254, 0.5)',
    amplitude: 40,
    frequency: 0.015,
    phaseShift: 1.5,
    speed: 0.007,
    strokeWidth: 1.5,
  },
  {
    color: 'rgba(165, 243, 252, 0.5)',
    amplitude: 25,
    frequency: 0.025,
    phaseShift: 3,
    speed: -0.004,
    strokeWidth: 1.5,
  },
  {
    color: 'rgba(207, 250, 225, 0.5)',
    amplitude: 35,
    frequency: 0.018,
    phaseShift: 4.5,
    speed: 0.006,
    strokeWidth: 1.5,
  },
];

const WavyBackground: React.FC<WavyBackgroundProps> = ({ className, numPoints = 100, wavesConfig = defaultWaves }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [viewBoxWidth, setViewBoxWidth] = useState(1000);
  const [viewBoxHeight, setViewBoxHeight] = useState(200);

  useEffect(() => {
    const updateViewBox = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        if (width > 0) setViewBoxWidth(width);
        if (height > 0) setViewBoxHeight(Math.min(height, 250));
      }
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);

    return () => window.removeEventListener('resize', updateViewBox);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 1;
      const newPaths = wavesConfig.map((wave) => {
        let pathData = `M 0 ${viewBoxHeight / 2 + wave.amplitude * Math.sin(wave.phaseShift + time * wave.speed)}`;
        for (let i = 1; i <= numPoints; i++) {
          const x = (i / numPoints) * viewBoxWidth;
          const yOffset = wave.amplitude * Math.sin(wave.frequency * x + wave.phaseShift + time * wave.speed);
          const y = viewBoxHeight / 2 + yOffset;
          pathData += ` L ${x} ${y}`;
        }
        return pathData;
      });
      setPaths(newPaths);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [wavesConfig, numPoints, viewBoxWidth, viewBoxHeight]);

  return (
    <svg
      ref={svgRef}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      style={{ width: '100%', height: '100%' }}
    >
      {paths.map((pathData, index) => (
        <path
          key={index}
          d={pathData}
          fill="none"
          stroke={wavesConfig[index].color}
          strokeWidth={wavesConfig[index].strokeWidth || 1}
        />
      ))}
    </svg>
  );
};

export default WavyBackground;
