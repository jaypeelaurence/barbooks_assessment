import { FC, useCallback, useMemo } from 'react';

import { useQueryParams } from 'hooks';
import { FilterForm } from 'ui/components/forms';
import { useGetGames } from 'modules/game/hooks';
import { PLATFORM, SORT_BY } from 'utils/constants';
import { GameFilterForm } from 'modules/game/forms';
import { removeEmpty } from 'utils/helpers';
import { useFilterContext } from 'modules/game/utils/providers/Filter';
import style from 'assets/styles/style.module.scss';
import { NotFound } from 'ui/partials';

import { GameCard } from '../components';
import { Games } from '../utils/types';

export interface GAME_FILTER {
  platform?: PLATFORM,
  category?: string,
  'sort-by'?: SORT_BY,
  title?: string, 
  tag?: string[],
}

const INIT_FILTERS: GAME_FILTER = {};

const SkeletonLoading: FC = () => (
  <div className={style.gameListing}>
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
    <GameCard isLoading={true} />
  </div>
);

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

  const games: Games[] = useMemo(() => {
    if (!query?.title) return data as Games[];
  
    return data?.filter(({ title }) => 
      title.toLowerCase().includes(String(query?.title).toLowerCase())) as Games[];
  }, [data, query?.title]);

  const handleOnChange = useCallback((value: Record<string, any>) => {
    if (!value?.title) value.title = null;
    
    if (parseInt(value?.platform) === 0) value.platform = null;
    
    if (parseInt(value?.category) === 0) value.category = null;
    
    if (parseInt(value['sort-by']) === 0) value['sort-by'] = null;

    setQuery(removeEmpty({ ...query, ...value }));
  }, [query, setQuery]);

  const listing = useMemo(() => {
    if (isLoading) return <SkeletonLoading />;

    if (!games.length) return <NotFound />

    return games?.map((game) => (
      <GameCard key={game?.id} data={game} isLoading={isLoading} />
    ));
  }, [isLoading, games]);

  return (
    <div>
      <FilterForm initialValues={query ?? INIT_FILTERS} onChange={handleOnChange}>
        {({ values, handleChange }) => (
          <GameFilterForm values={values} handleChange={handleChange} />
        )}
      </FilterForm>
      <div className={style.gameListing}>   
        {listing}
      </div>
    </div>
  );
};

export default GameListing;
