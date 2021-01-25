export default function Selector({ options }) {
  return (
    <select>
      {options.map((variable) => (
        <option value={variable} key={variable}>
          {variable}
        </option>
      ))}
    </select>
  );
}
