import Selector from "./Selector";

export default function DataViewer({ variables }) {
  return (
    <div>
      <Selector options={variables} />
    </div>
  );
}
