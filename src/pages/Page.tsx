import { FC, ReactNode, Suspense } from 'react';

import { Loading, Error } from 'ui/partials';
import { Route, Routes } from 'react-router-dom';
import { Game } from 'modules';

export interface ROUTE {
  index?: boolean,
  path: string,
  element: () => ReactNode,
}

const routes: ROUTE[] = [
  {
    index: true,
    path: '/*',
    element: () => <Game />,
  },
];

const Page: FC = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {routes.map(({ index, path, element }: ROUTE) => (
        <Route key={Math.random()} index={index} path={path} element={element()} />
      ))}
      <Route path={'*'} element={<Error />} />
    </Routes>
  </Suspense>
)

export default Page;
