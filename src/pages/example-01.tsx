import { Table } from "@mui/joy";
import { tableData } from "../data";
import { SlowTableRow } from "../components/show-table-row";
import { TableContainer } from "../components/table-container";
import { StickyThead } from "../components/sticky-thead";

export function Example01() {
  return (
    <TableContainer>
      <Table aria-label="重いテーブル">
        <StickyThead />
        <tbody>
          {tableData.map((data) => (
            <SlowTableRow key={data.id} data={data} />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
