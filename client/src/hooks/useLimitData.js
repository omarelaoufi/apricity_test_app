import { useEffect, useState } from "react";

export default function useLimitData(data) {
  const [limitedData, setLimitedData] = useState([]);
  const [remainder, setRemainder] = useState(0);

  useEffect(() => {
    setLimitedData(data.length > 100 ? data.slice(0, 100) : data);
    setRemainder(Math.max(0, data.length - 100));
  }, [data]);

  return [limitedData, remainder];
}
