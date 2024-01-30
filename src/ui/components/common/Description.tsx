import { FC } from 'react';

import style from 'assets/styles/style.module.scss';
import cn from 'classnames';

interface PROPS {
  content: string;
  className?: string;
  [key: string]: any;
}

const Description: FC<PROPS> = ({ content, className }) => (
  <div
    className={cn(
      style.description,
      style.p,
      className,
    )}
  >
    <div>{content}</div>
  </div>
);

export default Description;
