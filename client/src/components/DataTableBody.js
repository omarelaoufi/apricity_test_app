export default function DataTableBody({ data }) {
  return (
    <tbody>
      {data.map((valueObj, i) => (
        <tr key={i}>
          {Object.values(valueObj).map((value, j) => (
            <td key={j}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
