import { FC } from 'react';

import { startCase, toLower } from 'lodash';
import c from 'utils/constants';

import { GAME_FILTER } from '../containers/GameListing';

interface PROPS {
  values: GAME_FILTER,
  // eslint-disable-next-line no-unused-vars
  handleChange: (key: string, value: any) => void
}

const GameFilterForm: FC<PROPS> = ({ values, handleChange }) => {
  const handleOnChange = (e: Record<string, any>) => handleChange(e.target.name, e.target.value)

  return (
    <div>
      <form>
        <input type="text" name="title" value={values?.title} onChange={handleOnChange} />
        <div>
          <select name="platform" value={values.platform} onChange={handleOnChange}>
            <option value={0}>-- select a platform --</option>
            {c.ENUM_PLATFORM?.map(({ label, value }) => (
              <option
                key={`${value}-${label}`}
                value={value}
              >
                {label}
              </option>
            ))}
          </select>
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
          <select name="sort-by" value={values['sort-by']} onChange={handleOnChange}>
            <option value={0}>-- sort by --</option>
            {c.ENUM_SORT_BY?.map((sortBy: string) => (
              <option
                key={sortBy}
                value={sortBy} 
              >
                {startCase(toLower(sortBy))}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
};

export default GameFilterForm;
