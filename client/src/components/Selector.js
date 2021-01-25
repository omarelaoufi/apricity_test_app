export default function Selector({ options, onVariableSelection }) {
  return (
    <select
      defaultValue=""
      onChange={(e) => onVariableSelection(e.target.value)}
    >
      <option value="" disabled>
        Select a variable
      </option>
      {options.map((variable) => (
        <option value={variable} key={variable}>
          {variable}
        </option>
      ))}
    </select>
  );
}
