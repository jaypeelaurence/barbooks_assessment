import { FC, PropsWithChildren } from 'react';

import style from 'assets/styles/style.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)

export default Container;