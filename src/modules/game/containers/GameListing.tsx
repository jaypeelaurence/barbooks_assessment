import { FC, useCallback } from 'react';

import { useQueryParams } from 'hooks';
import { FilterForm } from 'ui/components/forms';
import { useGetGames } from 'modules/game/hooks';
import { PLATFORM, SORT_BY } from 'utils/constants';
import { GameFilterForm } from 'modules/game/forms';
import { debounce } from 'lodash';
import { removeEmpty } from 'utils/helpers';
import { useFilterContext } from 'modules/game/utils/providers/Filter';
import { Header } from 'ui/partials';

import { GameCard } from '../components';

export interface GAME_FILTER {
  platform?: PLATFORM,
  category?: string,
  'sort-by'?: SORT_BY,
  title?: string, 
  tag?: string[],
}

const INIT_FILTERS: GAME_FILTER = {};

const SkeletonLoading: FC = () => (
  <div>
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
    <GameCard isLoading={true} />
  </div>
)

const GameListing: FC = () => {
  const { state, dispatch } = useFilterContext();
  const [query, _setQuery] = useQueryParams(
    Object.keys(state).length ? state :
    INIT_FILTERS as Record<string, any>
  );
  const { data, isLoading } = useGetGames(query);

  const setQuery = useCallback((payload: any) => {
    _setQuery(payload);
    dispatch?.({ payload });
  }, [_setQuery, dispatch]);

  const handleOnChange = useCallback((value: Record<string, any>) => {
    if (value?.title) {
      debounce(() => setQuery({ ...query, ...value }), 1000)()

      return;
    } else value.title = null;
    
    if (parseInt(value?.platform) === 0) value.platform = null;
    
    if (parseInt(value?.category) === 0) value.category = null;
    
    if (parseInt(value['sort-by']) === 0) value['sort-by'] = null;

    setQuery(removeEmpty({ ...query, ...value }));
  }, [query, setQuery]);

  return (
    <div>
      <Header />
      <FilterForm initialValues={query ?? INIT_FILTERS} onChange={handleOnChange}>
        {({ values, handleChange }) => (
          <GameFilterForm values={values} handleChange={handleChange} />
        )}
      </FilterForm>
      {isLoading ? <SkeletonLoading /> : (
        data?.map((game) => (
          <GameCard key={game?.id} data={game} isLoading={isLoading} />
        ))
      )}
    </div>
  )
};

export default GameListing;
