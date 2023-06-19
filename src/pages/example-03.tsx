import { Table } from "@mui/joy";
import { tableData } from "../data";
import { SlowTableRow } from "../components/show-table-row";
import { TableContainer } from "../components/table-container";
import { StickyThead } from "../components/sticky-thead";
import { useLazyIntersection } from "../hooks/use-lazy-intersection";
import { useMemo } from "react";

export function Example03() {
  const elements = useMemo(
    () => tableData.map((data) => <SlowTableRow key={data.id} data={data} />),
    []
  );

  const { LazyComponents } = useLazyIntersection({
    elements,
    chunkSize: 100,
    rowCount: 3,
  });

  return (
    <TableContainer>
      <Table aria-label="requestIdleCallback">
        <StickyThead />
        <tbody>{LazyComponents}</tbody>
      </Table>
    </TableContainer>
  );
}
