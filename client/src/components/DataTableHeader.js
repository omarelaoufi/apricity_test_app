export default function DataTableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>
            {header
              .replace("avg_", "average ")
              .replace("variable_count", "count")}
          </th>
        ))}
      </tr>
    </thead>
  );
}
