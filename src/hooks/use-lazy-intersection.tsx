import { useEffect, useMemo, useRef, useState } from "react";

type Options = {
  chunkSize: number;
  elements: JSX.Element[];
  rowCount: number;
};

/**
 * elementsをchunkして、IntersectionObserver遅延読み込みを行う
 *
 * elementsは必ずメモ化してください
 */
export const useLazyIntersection = (options: Options) => {
  const { chunkSize, elements, rowCount } = options;

  const [renderedItemsCount, setRenderedItemsCount] = useState(chunkSize);

  const ref = useRef<HTMLTableRowElement>(null);

  const LazyComponents = useMemo(
    () => (
      <>
        {elements.slice(0, renderedItemsCount)}
        {elements.length > renderedItemsCount && (
          <tr ref={ref}>
            <td colSpan={rowCount}>Loading...</td>
          </tr>
        )}
      </>
    ),
    [rowCount, elements, renderedItemsCount]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setRenderedItemsCount(
            Math.min(renderedItemsCount + chunkSize, elements.length)
          );

          if (ref.current && renderedItemsCount > elements.length) {
            obs.unobserve(ref.current);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [elements.length, chunkSize, renderedItemsCount]);

  useEffect(() => {
    setRenderedItemsCount(chunkSize);
  }, [elements, chunkSize]);

  return { LazyComponents };
};
