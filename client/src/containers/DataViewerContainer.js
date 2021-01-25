import DataViewer from "../components/DataViewer";

export default function DataViewerContainer() {
  const variables = ["age", "class of worker"];

  return <DataViewer variables={variables} />;
}
