/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, FC, ReactNode } from 'react';

import { sanitizeParams } from 'utils/helpers';

interface PROPS {
  initialValues: { [key: string]: any },
  onChange: (values: Record<string, any>) => void,
  children: (props: {
    values: PROPS['initialValues'],
    handleChange: (key: string, value: any) => void
  }) => ReactNode
}

const FilterForm: FC<PROPS> = ({ children, initialValues, onChange }) => {
  const [values, setValues] = useState(initialValues);
  const handleChange = (key: string, value: any) => {
    setValues((prevVal) => ({ ...prevVal, [key]: value }));
  };

  const changed = useCallback(() => {
    onChange(sanitizeParams(values));
  }, [onChange, values]);

  useEffect(() => {
    changed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return children({
    values,
    handleChange,
  });
};

export default FilterForm;
