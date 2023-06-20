import { useCallback, useState } from "react";

export const usePager = (maxPage: number) => {
  const [page, setPage] = useState(0);

  const nextPage = useCallback(() => {
    setPage((prev) => {
      const result = prev + 1;
      return result <= maxPage ? result : 0;
    });
  }, [maxPage]);

  const prevPage = useCallback(() => {
    setPage((prev) => {
      const result = prev - 1;
      return result >= 0 ? result : maxPage;
    });
  }, [maxPage]);

  return [page, { nextPage, prevPage }] as const;
};
