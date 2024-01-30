import { FC } from 'react';

import { Link } from 'react-router-dom';
import style from 'assets/styles/style.module.scss';

interface PROPS {
  to: string;
  label: string;
}

const NavButton: FC<PROPS> = ({ to, label }) => (
  <Link to={to} className={style.navButton}>
    {label}
  </Link>
);

export default NavButton;
