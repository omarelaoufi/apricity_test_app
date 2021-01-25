export default function Selector({ options, onVariableSelection }) {
  return (
    <select onChange={(e) => onVariableSelection(e.target.value)}>
      {options.map((variable) => (
        <option value={variable} key={variable}>
          {variable}
        </option>
      ))}
    </select>
  );
}
