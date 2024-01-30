import { FC, PropsWithChildren } from 'react';

import style from 'assets/styles/style.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.container}>
    <div className={style.palette}>
      <div>#1a1a1c</div>
      <div>#4e4e50</div>
      <div>#939396</div>
      <div>#300919</div>
      <div>#6f2232</div>
      <div>#c3083f</div>
    </div>
    {children}
  </div>
);

export default Container;