export default function DataTableBody({ data }) {
  return (
    <tbody>
      {data.map((valueObj, i) => (
        <tr key={i}>
          {Object.values(valueObj).map((value, j) => (
            <td key={j}>{j === 2 ? Math.round(value * 10) / 10 : value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
