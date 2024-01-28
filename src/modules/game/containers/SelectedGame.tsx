import { FC } from 'react';

import { useParams } from 'react-router-dom';
import { useGetGame } from 'modules/game/hooks';
import { Header } from 'ui/partials';

import { SelectedGameCard } from '../components';

const SkeletonLoading: FC = () => <SelectedGameCard isLoading={false} />

const SelectedGame: FC = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetGame(id!);

  if (isLoading) return <SkeletonLoading />;

  return (
    <>
      <Header />
      {isLoading ? <SkeletonLoading /> : (
        <SelectedGameCard data={data} isLoading={true} />
      )}
    </>
  );
};

export default SelectedGame;
