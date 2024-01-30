import { FC, useCallback, useState } from 'react';

import { debounce, startCase, toLower } from 'lodash';
import c from 'utils/constants';
import style from 'assets/styles/style.module.scss';
import { Select } from 'ui/components/forms';

import { GAME_FILTER } from '../containers/GameListing';

interface PROPS {
  values: GAME_FILTER,
  // eslint-disable-next-line no-unused-vars
  handleChange: (key: string, value: any) => void
}

const GameFilterForm: FC<PROPS> = ({ values, handleChange }) => {
  const [title, setTitle] = useState(values.title);

  const handleOnChange = (e: Record<string, any>) => handleChange(e.target.name, e.target.value);

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
              value={values?.platform ?? ''}
              name="platform"
              label="Filter by Platform"
              options={[
                {
                  label: '-- select a platform --',
                  value: 0,
                },
                ...c.ENUM_PLATFORM,
              ]}
              onChange={handleOnChange}
            />
            <div>
              <label>Filter by Category:</label>
              <select name="category" value={values.category} onChange={handleOnChange}>
                <option value={0}>-- select a category --</option>
                {c.ENUM_CATEGORIES?.map((category: string) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {startCase(toLower(category))}
                  </option>
                ))}
              </select>
            </div>
            <Select
              value={values['sort-by'] ?? ''}
              name="sort-by"
              label="Sort By"
              options={[
                {
                  label: '-- sort by --',
                  value: 0,
                },
                ...c.ENUM_SORT_BY.map((sortBy: string) => ({
                  label: startCase(toLower(sortBy)),
                  value: sortBy,
                })),
              ]}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
};

export default GameFilterForm;
