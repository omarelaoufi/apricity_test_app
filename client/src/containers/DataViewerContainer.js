import DataViewer from "../components/DataViewer";
import useFetchVariables from "../hooks/useFetchVariables";

export default function DataViewerContainer() {
  const variables = useFetchVariables();

  return <DataViewer variables={variables} />;
}
