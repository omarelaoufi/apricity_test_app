import { useEffect, useState } from "react";

export default function useFetchVariableData(variable) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`api/${variable}`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      setData(body);
    }

    if (variable) fetchData();
  }, [variable]);

  return data;
}
