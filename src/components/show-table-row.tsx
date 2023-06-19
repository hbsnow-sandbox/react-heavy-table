import { TableData } from "../data";

type Props = {
  data: TableData[number];
};

export function SlowTableRow(props: Props) {
  const { data } = props;

  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 参考: https://react.dev/reference/react/useDeferredValue
  }

  return (
    <tr className="item">
      <td>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.job}</td>
    </tr>
  );
}
