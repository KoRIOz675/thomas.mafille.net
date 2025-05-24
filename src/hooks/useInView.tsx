import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverOptions): [RefObject<T | null>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (options?.triggerOnce) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(currentRef);
          }
        } else {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
}

export default useInView;
