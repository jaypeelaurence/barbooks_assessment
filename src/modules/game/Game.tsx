import { FC, Suspense } from 'react';

import { ROUTE } from 'pages/Page';
import { Route, Routes } from 'react-router-dom';
import { Loading, Error } from 'ui/partials';

import  { GameListing, SelectedGame } from './containers';
import Provider from './utils/providers';

const routes: ROUTE[] = [
  {
    index: true,
    path: '/',
    element: () => <GameListing />,
  },
  {
    path: '/:id',
    element: () => <SelectedGame />,
  },
];

const Game: FC = () => (
  <Suspense fallback={<Loading />}>
    <Provider>
      <Routes>
        {routes.map(({ index, path, element }: ROUTE) => (
          <Route key={Math.random()} index={index} path={path} element={element()} />
        ))}
        <Route path={'*'} element={<Error />} />
      </Routes>
    </Provider>
  </Suspense>
)

export default Game;
