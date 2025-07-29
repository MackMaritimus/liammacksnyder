import { useEffect, useState, useRef } from "react";

// Hook creates refs for N elements and returns the tallest height + refs array
export default function useTallestChildHeight(count: number) {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const heights = refs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      setHeight(max);
    });

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  return [refs.current, height] as const;
}