import { FC } from 'react';

import cn from 'classnames';
import { Image, NavButton } from 'ui/components/common';
import style from 'assets/styles/style.module.scss';

import { Games } from '../utils/types';

interface PROPS {
  data?: Games,
  isLoading?: boolean,
}

const GameCard: FC<PROPS> = ({ data, isLoading }) => {
  if (isLoading) return (
    <div>
      <div>---</div>
      <div>
        <Image src={data?.thumbnail as string} alt={data?.title} isLoading={isLoading} />
        <div>
          <div>---</div>
          <div>---</div>
        </div>
      </div>
    </div>
  )
  
  return (
    <div className={style.gameCard}>
      <div>
        <h1 className={cn(style.h1, style.primary)}>{data?.title}</h1>
        <div>
          <Image src={data?.thumbnail as string} alt={data?.title} />
          <div>
            <p>{data?.shortDescription}</p>
            <NavButton to={`/${data?.id}`} label='View More'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
