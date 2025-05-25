import React, { useState, useEffect, useRef } from 'react';

interface NumberParticle {
  id: number;
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  fontSize: number;
  color: string;
}

interface FlyingNumbersBackgroundProps {
  count?: number;
  className?: string;
}

const FlyingNumbersBackground: React.FC<FlyingNumbersBackgroundProps> = ({ count = 50, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<NumberParticle[]>([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const initializeParticle = (id: number, currentWidth: number, currentHeight: number): NumberParticle => {
    const char = String(Math.floor(Math.random() * 2));
    const side = Math.floor(Math.random() * 4);
    let x, y;
    if (side === 0) {
      // Top
      x = Math.random() * currentWidth;
      y = -20 - Math.random() * 20;
    } else if (side === 1) {
      // Right
      x = currentWidth + 20 + Math.random() * 20;
      y = Math.random() * currentHeight;
    } else if (side === 2) {
      // Bottom
      x = Math.random() * currentWidth;
      y = currentHeight + 20 + Math.random() * 20;
    } else {
      // Left
      x = -20 - Math.random() * 20;
      y = Math.random() * currentHeight;
    }

    const angle = Math.random() * 2 * Math.PI;
    const speed = 0.15 + Math.random() * 0.15;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    const opacity = 0.1 + Math.random() * 0.3;
    const fontSize = 14 + Math.random() * 13;
    const colors = ['text-slate-400', 'text-slate-500', 'text-indigo-300', 'text-purple-300'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return { id, char, x, y, vx, vy, opacity, fontSize, color };
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setContainerSize({ width, height });
          if (
            particles.length !== count ||
            (particles.length > 0 && (containerSize.width !== width || containerSize.height !== height))
          ) {
            setParticles(Array.from({ length: count }, (_, i) => initializeParticle(i, width, height)));
          }
        }
      }
    });

    observer.observe(currentContainer);
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
      observer.disconnect();
    };
  }, [count, containerSize.width, containerSize.height, particles.length]);

  useEffect(() => {
    if (particles.length === 0 || containerSize.width === 0 || containerSize.height === 0) return;

    let animationFrameId: number;
    const { width, height } = containerSize;

    const updateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => {
          const newX = p.x + p.vx;
          const newY = p.y + p.vy;

          const margin = p.fontSize + 30;
          if (newX < -margin || newX > width + margin || newY < -margin || newY > height + margin) {
            return initializeParticle(p.id, width, height);
          }
          return { ...p, x: newX, y: newY };
        })
      );
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [particles, containerSize]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute font-mono select-none ${p.color}`}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
            fontSize: `${p.fontSize}px`,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

export default FlyingNumbersBackground;
