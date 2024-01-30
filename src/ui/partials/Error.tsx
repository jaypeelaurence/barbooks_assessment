import { FC } from 'react';

import style from 'assets/styles/style.module.scss';
import { NavButton } from 'ui/components/common';

const Error: FC = () => (
  <div className={style.error}>
    <div>
      <h1>ERROR</h1>
      <h2><span className={style.red}>PAGE</span> NOT FOUND</h2>
      <NavButton label="GO BACK TO HOMAPAGE" to="/" />
    </div>
  </div>
);

export default Error;
