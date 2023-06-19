import {
  Children,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

type Props = PropsWithChildren<{
  chunkSize: number;
  timeout?: number;
}>;

export function Defer(props: Props) {
  const { chunkSize, timeout = 300, children } = props;

  const [renderedItemsCount, setRenderedItemsCount] = useState(chunkSize);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    if (renderedItemsCount < childrenArray.length) {
      window.requestIdleCallback(
        () => {
          setRenderedItemsCount(
            Math.min(renderedItemsCount + chunkSize, childrenArray.length)
          );
        },
        { timeout }
      );
    }
  }, [renderedItemsCount, childrenArray.length, chunkSize, timeout]);

  return <>{childrenArray.slice(0, renderedItemsCount)}</>;
}
