import { useState } from "react";
import DataViewer from "../components/DataViewer";
import useFetchVariables from "../hooks/useFetchVariables";

export default function DataViewerContainer() {
  const [selectedVariable, setSelectedVariable] = useState(null);

  const variables = useFetchVariables();

  return (
    <DataViewer
      variables={variables}
      onVariableSelection={setSelectedVariable}
    />
  );
}
