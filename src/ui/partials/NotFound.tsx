import { FC } from 'react';

import { IoIosWarning } from 'react-icons/io';
import style from 'assets/styles/style.module.scss';

const Error: FC = () => (
  <div className={style.notFound}>
    <div>
      <IoIosWarning />
      <h2><span className={style.red}>RESULTS</span> NOT FOUND</h2>
    </div>
  </div>
);

export default Error;
