import { FC } from 'react';

import cn from 'classnames';
import style from 'assets/styles/style.module.scss';
import color from 'assets/styles/theme/color.module.scss';
import { upperCase } from 'lodash';

const Header: FC = () => (
  <div className={style.header}>
    <h1 className={cn(style.h1, style.primary)}>
      {upperCase('Find & track the best free-to-play games!')}
    </h1>
    <h2 className={cn(style.h2, style.secondary)}>
      SEARCH FOR WHAT TO <span className={color.red}>PLAY</span> NEXT!
    </h2>
  </div>
);

export default Header;