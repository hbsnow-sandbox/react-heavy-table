import { Box, Button, ButtonGroup, Table } from "@mui/joy";
import { tableData } from "../data";
import { SlowTableRow } from "../components/show-table-row";
import { TableContainer } from "../components/table-container";
import { StickyThead } from "../components/sticky-thead";
import { useLazyIntersection } from "../hooks/use-lazy-intersection";
import { useMemo } from "react";
import { usePager } from "../hooks/use-pager";

export function Example04() {
  const [page, { nextPage, prevPage }] = usePager(
    Math.ceil(tableData.length / 500) - 1
  );

  const elements = useMemo(
    () =>
      tableData
        .filter((_, i) => i >= page * 500 && i < (page + 1) * 500)
        .map((data) => <SlowTableRow key={data.id} data={data} />),
    [page]
  );

  const { LazyComponents } = useLazyIntersection({
    elements,
    chunkSize: 500,
    rowCount: 4,
  });

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ButtonGroup variant="solid">
          <Button onClick={() => prevPage()}>prev</Button>
          <Button onClick={() => nextPage()}>next</Button>
        </ButtonGroup>
        <Box>Page: {page}</Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <TableContainer>
          <Table aria-label="IntersectionObserver">
            <StickyThead />
            <tbody>{LazyComponents}</tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
