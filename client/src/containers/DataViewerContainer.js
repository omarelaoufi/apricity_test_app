import { useState } from "react";
import DataViewer from "../components/DataViewer";
import useFetchVariables from "../hooks/useFetchVariables";
import useFetchVariableData from "../hooks/useFetchVariableData";
import useLimitData from "../hooks/useLimitData";

export default function DataViewerContainer() {
  const [selectedVariable, setSelectedVariable] = useState(null);

  const variables = useFetchVariables();
  const [data, remainder] = useLimitData(
    useFetchVariableData(selectedVariable)
  );

  return (
    <DataViewer
      variables={variables}
      onVariableSelection={setSelectedVariable}
      data={data}
      remainder={remainder}
    />
  );
}
