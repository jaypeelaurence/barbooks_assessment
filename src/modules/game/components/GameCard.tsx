import { FC } from 'react';

import cn from 'classnames';
import { Image, NavButton, Description } from 'ui/components/common';
import style from 'assets/styles/style.module.scss';

import { Games } from '../utils/types';

interface PROPS {
  data?: Games,
  isLoading?: boolean,
}

const GameCard: FC<PROPS> = ({ data, isLoading }) => {
  if (isLoading) return (
    <div className={style.gameCard}>
      <div className={cn(style.title, style.loading)} />
      <div className={style.flex}>
        <div className={style.image}>
          <Image
            src={data?.thumbnail as string}
            alt={data?.title}
            isLoading={isLoading}
            width={250}
            height={150}
          />
        </div>
        <div className={style.content}>
          <div className={style._description}>
            <div className={style.loading}/>
            <div className={style.loading}/>
            <div className={style.loading}/>
            <div className={style.loading}/>
            <div className={style.loading}/>
            <div className={style.loading}/>
          </div>
          <div className={style._actions}>
            <div className={style.loading} />
          </div>
        </div>
      </div>
    </div>
  )
  
  return (
    <div className={style.gameCard}>
      <div>
        <h1 className={cn(style.h1, style.primary)}>{data?.title}</h1>
        <div className={style.flex}>
          <div className={style.image}>
            <Image
              src={data?.thumbnail as string}
              alt={data?.title}
              width={250}
              height={150}
            />
          </div>
          <div className={style.content}>
            <Description content={data?.shortDescription ?? ''}/>
            <div className={style.actions}>
              <NavButton to={`/${data?.id}`} label='VIEW MORE'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
