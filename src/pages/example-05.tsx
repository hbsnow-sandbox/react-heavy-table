import { Box, Button, ButtonGroup, LinearProgress, Table } from "@mui/joy";
import { tableData } from "../data";
import { SlowTableRow } from "../components/show-table-row";
import { TableContainer } from "../components/table-container";
import { StickyThead } from "../components/sticky-thead";
import { Suspense, useMemo, useTransition } from "react";
import { usePager } from "../hooks/use-pager";
import { useLazyIntersection } from "../hooks/use-lazy-intersection";

export function Example05() {
  const [page, { nextPage, prevPage }] = usePager(3);

  const [isPending, startTransition] = useTransition();

  const elements = useMemo(() => {
    return tableData
      .filter((_, i) => i >= page * 500 && i < (page + 1) * 500)
      .map((data) => <SlowTableRow key={data.id} data={data} />);
  }, [page]);

  const { LazyComponents } = useLazyIntersection({
    elements,
    chunkSize: 500,
    rowCount: 4,
  });

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ButtonGroup variant="solid">
          <Button onClick={() => startTransition(() => prevPage())}>
            prev
          </Button>
          <Button onClick={() => startTransition(() => nextPage())}>
            next
          </Button>
        </ButtonGroup>
        <Box>Page: {page}</Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <TableContainer>
          {isPending && (
            <LinearProgress
              size="sm"
              sx={{
                "--LinearProgress-radius": "0px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            />
          )}
          <Table aria-label="IntersectionObserver">
            <StickyThead />

            <tbody>
              <Suspense fallback={"loading"}>{LazyComponents}</Suspense>
            </tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
