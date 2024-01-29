import { FC } from 'react';

import cn from 'classnames';
import style from 'assets/styles/style.module.scss';

const Header: FC = () => (
  <div className={style.header}>
    <h1 className={cn(style.h1, style.primary)}>Find & track the best free-to-play games!</h1>
    <h2 className={cn(style.h2, style.secondary)}>Search for what to play next!</h2>
  </div>
);

export default Header;