import { useEffect, useState } from "react";

export default function useFetchVariables() {
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/variables");
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);

      setVariables(body);
    }

    fetchData();
  }, []);

  return variables;
}
