import { Table } from "@mui/joy";
import { tableData } from "../data";
import { SlowTableRow } from "../components/show-table-row";
import { TableContainer } from "../components/table-container";
import { StickyThead } from "../components/sticky-thead";
import { Defer } from "../components/defer";

export function Example02() {
  return (
    <TableContainer>
      <Table aria-label="requestIdleCallback">
        <StickyThead />
        <tbody>
          <Defer chunkSize={100}>
            {tableData.map((data) => (
              <SlowTableRow key={data.id} data={data} />
            ))}
          </Defer>
        </tbody>
      </Table>
    </TableContainer>
  );
}
