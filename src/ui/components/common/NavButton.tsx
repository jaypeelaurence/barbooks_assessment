import { FC } from 'react';

import { Link } from 'react-router-dom';

interface PROPS {
  to: string;
  label: string;
}

const NavButton: FC<PROPS> = ({ to, label }) => <Link to={to}>{label}</Link>

export default NavButton;
