import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";

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
export const useLazyIntersectionDeferred = (options: Options) => {
  const { chunkSize, elements, rowCount } = options;

  const [renderedItemsCount, setRenderedItemsCount] = useState(chunkSize);

  const ref = useRef<HTMLTableRowElement>(null);

  const deferredElements = useDeferredValue(elements);

  const LazyComponents = useMemo(
    () => (
      <>
        {deferredElements.slice(0, renderedItemsCount)}
        {deferredElements.length > renderedItemsCount && (
          <tr ref={ref}>
            <td colSpan={rowCount}>Loading...</td>
          </tr>
        )}
      </>
    ),
    [rowCount, deferredElements, renderedItemsCount]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setRenderedItemsCount(
            Math.min(renderedItemsCount + chunkSize, deferredElements.length)
          );

          if (ref.current && renderedItemsCount > deferredElements.length) {
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
  }, [deferredElements.length, chunkSize, renderedItemsCount]);

  useEffect(() => {
    setRenderedItemsCount(chunkSize);
  }, [deferredElements, chunkSize]);

  return { LazyComponents };
};
