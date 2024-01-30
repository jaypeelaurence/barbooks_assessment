/* eslint-disable no-unsafe-optional-chaining */
import { FC, useCallback, useState } from 'react';

// eslint-disable-next-line import/named
import { StylesConfig } from 'react-select';
import { debounce, startCase, toLower } from 'lodash';
import c from 'utils/constants';
import style from 'assets/styles/style.module.scss';
import Select, { SelectMulti } from 'ui/components/forms/Select';

import { GAME_FILTER } from '../containers/GameListing';

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderColor: '#6f2232 !important',
    backgroundColor: '#c3083f',
    borderRadius: '40px',
  }),
  option: () => ({
    backgroundColor: 'transparent'
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      borderRadius: '40px',
      backgroundColor: '#c3083f'
    };
  },
};

interface PROPS {
  values: GAME_FILTER,
  // eslint-disable-next-line no-unused-vars
  handleChange: (key: string, value: any) => void
}

const GameFilterForm: FC<PROPS> = ({ values, handleChange }) => {
  const [title, setTitle] = useState(values.title);

  const handleOnChange = (e: Record<string, any>) => handleChange(e.name, e.value);
  const handleMultiOnChange = (e: Record<string, any>) => handleChange(e.name, e.value);

  const handleOnChangeSearch = useCallback((e: Record<string, any>) => {
    setTitle(e.target.value)
    debounce(() => handleChange(e.target.name,  e.target.value), 1000)();
  }, [handleChange, setTitle]);

  return (
    <div className={style.gameFilter}>
      <form>
        <input
          type="text"
          name="title"
          placeholder="search by name..."
          value={title}
          onChange={handleOnChangeSearch}
        />
        <div>
          <div>
            <Select
              value={values?.platform ?? 0}
              name="platform"
              label="Filter by Platform"
              options={c.ENUM_PLATFORM}
              onChange={handleOnChange}
              styles={colourStyles}
            />
            <SelectMulti
              value={values?.category ?? []}
              name="category"
              label="Filter by Category"
              options={c.ENUM_CATEGORIES?.map((category: string) => ({
                label: startCase(toLower(category)),
                value: category,
              }))}
              onChange={handleMultiOnChange}
              styles={colourStyles}
            />
            <Select
              value={values['sort-by'] ?? ''}
              name="sort-by"
              label="Sort By"
              options={c.ENUM_SORT_BY.map((sortBy: string) => ({
                label: startCase(toLower(sortBy)),
                value: sortBy,
              }))}
              onChange={handleOnChange}
              styles={colourStyles}
            />
          </div>
        </div>
      </form>
    </div>
  )
};

export default GameFilterForm;
