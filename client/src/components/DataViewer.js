import DataTable from "./DataTable";
import Selector from "./Selector";

export default function DataViewer({ variables, onVariableSelection, data }) {
  return (
    <div>
      <Selector options={variables} onVariableSelection={onVariableSelection} />
      {data && data.length > 0 && <DataTable data={data} />}
    </div>
  );
}
