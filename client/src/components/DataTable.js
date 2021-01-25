import DataTableBody from "./DataTableBody";
import DataTableHeader from "./DataTableHeader";

export default function DataTable({ data }) {
  return (
    <table style={{ margin: "auto", width: "60%" }}>
      <DataTableHeader headers={Object.keys(data[0])} />
      <DataTableBody data={data} />
    </table>
  );
}
