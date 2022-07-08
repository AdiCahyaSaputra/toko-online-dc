import { RefObject, useEffect, useState } from "react"

type useIntersectionArgs = {
  targetElements: RefObject<Element>,
  options: {
    threshold?: number,
    root?: null,
    rootMargin?: string,
  },
}

const useIntersection = ({ targetElements, options }: useIntersectionArgs): IntersectionObserverEntry | undefined => {
  const [target, setTarget] = useState<IntersectionObserverEntry>();
  const callback: IntersectionObserverCallback = ([target]: IntersectionObserverEntry[]) => setTarget(target);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(callback, options);
    if(targetElements.current) observer.observe(targetElements.current);

    return () => observer.disconnect(); // Biar gampang awowkowk

  }, [targetElements, options]);

  return target;
}

export default useIntersection;
