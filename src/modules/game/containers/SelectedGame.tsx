import { FC } from 'react';

import { useParams } from 'react-router-dom';
import { useGetGame } from 'modules/game/hooks';
import { Helmet } from 'react-helmet';

import { SelectedGameCard } from '../components';

const SkeletonLoading: FC = () => <SelectedGameCard isLoading={false} />

const SelectedGame: FC = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetGame(id!);

  if (isLoading) return <SkeletonLoading />;

  return (
    <div>
      <Helmet title={data?.title} />
      {isLoading ? <SkeletonLoading /> : (
        <SelectedGameCard data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SelectedGame;
