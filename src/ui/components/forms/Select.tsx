import { FC, SelectHTMLAttributes } from 'react';

import style from 'assets/styles/style.module.scss';
import ReactSelect from 'react-select'

interface PROPS extends SelectHTMLAttributes<HTMLSelectElement>{
  value: string | number | string[],
  label?: string,
  name: string,
  styles?: any,
  options: any[],
  // eslint-disable-next-line no-unused-vars
  onChange: (_arg: any) => void,
}

const Select: FC<PROPS> = ({ styles, label, value, name, options, onChange }) => {
  const handleOnChange = (e: any) => onChange({ name, value: e.value });

  return (
    <div className={style.select}>
      {label ? <label>{label}:</label> : null}
      <ReactSelect
        defaultValue={value}
        name={name}
        onChange={handleOnChange}
        options={options}
        styles={styles}
      />
    </div>
  );
}

export const SelectMulti: FC<PROPS> = ({ styles, label, value, name, options, onChange }) => {
  const handleOnChange = (e: any) =>
    onChange({ name, value: e.map((d: Record<string, any>) => d.value)});

  return (
    <div className={style.select}>
      {label ? <label>{label}:</label> : null}
      <ReactSelect
        defaultValue={value}
        name={name}
        onChange={handleOnChange}
        options={options}
        styles={styles}
        isMulti
      />
    </div>
  );
}


export default Select;