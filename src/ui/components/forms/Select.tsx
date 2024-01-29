import { FC } from 'react';

interface SELECT_OPTIONS {
  label: string,
  value: string | number,
}

interface PROPS {
  value: string | number,
  label?: string,
  name: string,
  options: SELECT_OPTIONS[],
  // eslint-disable-next-line no-unused-vars
  onChange: (_arg: any) => void
}

const Select: FC<PROPS> = ({ label, value, name, options, onChange }) => (
  <div>
    {label ? <label>{label}:</label> : null}
    <select name={name} value={value} onChange={onChange}>
      {options.map(({ label, value }: SELECT_OPTIONS) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  </div>
)

export default Select;