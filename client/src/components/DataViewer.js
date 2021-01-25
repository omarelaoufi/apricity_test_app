import Selector from "./Selector";

export default function DataViewer({ variables, onVariableSelection }) {
  return (
    <div>
      <Selector options={variables} onVariableSelection={onVariableSelection} />
    </div>
  );
}
