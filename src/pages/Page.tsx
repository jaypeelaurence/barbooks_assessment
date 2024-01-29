import { FC, ReactNode, Suspense } from 'react';

import { Helmet, Loading, Error } from 'ui/partials';
import { Route, Routes } from 'react-router-dom';
import { Game } from 'modules';
import { Container } from 'ui/layouts';

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
  <Container>
    <Helmet />
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(({ index, path, element }: ROUTE) => (
          <Route key={Math.random()} index={index} path={path} element={element()} />
        ))}
        <Route path={'*'} element={<Error />} />
      </Routes>
    </Suspense>
  </Container>
)

export default Page;
