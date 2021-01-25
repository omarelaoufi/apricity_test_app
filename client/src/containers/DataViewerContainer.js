import { useState } from "react";
import DataViewer from "../components/DataViewer";
import useFetchVariables from "../hooks/useFetchVariables";
import useFetchVariableData from "../hooks/useFetchVariableData";

export default function DataViewerContainer() {
  const [selectedVariable, setSelectedVariable] = useState(null);

  const variables = useFetchVariables();
  const data = useFetchVariableData(selectedVariable);

  return (
    <DataViewer
      variables={variables}
      onVariableSelection={setSelectedVariable}
    />
  );
}
