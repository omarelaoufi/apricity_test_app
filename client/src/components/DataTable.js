import DataTableBody from "./DataTableBody";
import DataTableHeader from "./DataTableHeader";

export default function DataTable({ data }) {
  return (
    <table>
      <DataTableHeader headers={Object.keys(data[0])} />
      <DataTableBody data={data} />
    </table>
  );
}
