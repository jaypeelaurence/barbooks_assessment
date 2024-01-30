import { FC, useMemo } from 'react';

import cn from 'classnames';
import { Description, Image, NavButton } from 'ui/components/common';
import { lowerCase, startCase, upperCase } from 'lodash';
import { genearateRandomArray  } from 'utils/helpers';
import style from 'assets/styles/style.module.scss';

import { Game, Screenshot, SystemRequirements } from '../utils/types';

interface PROPS {
  data?: Game,
  isLoading?: boolean,
}

const SelectedGameCard: FC<PROPS> = ({ data, isLoading }) => {
  const requirements = useMemo(() => {
    if (isLoading) return (
      <div className={style._requirements}>
        {genearateRandomArray(4).map((id) => (
          <div key={id} className={style.specs}>
            <div className={style.loading}/>
            <div className={style.loading}/>
          </div>
        ))}
      </div>
    );

    const minReq = Object.entries((data?.minimumSystemRequirements ?? {}) as SystemRequirements);

    return (
      <div className={style.requirements}>
        {minReq.map(([label, value]) => (
          <div key={label}>
            <h3 className={cn(style.h3)}>{startCase(lowerCase(label))}</h3>
            <p className={cn(style.p)}>{value}</p>
          </div>
        ))}
      </div>
    );
  }, [data, isLoading]);
  
  const screenshots = useMemo(() => {
    if (isLoading) return (
      <div className={style.screenshots}>
        {
          genearateRandomArray(3)
            .map((id) => (
              <Image
                key={id}
                alt={String(id)}
                src={String(id)}
                isLoading={true} 
                width={380}
                height={200}
              />
            ))
        }
      </div>
    );

    return (
      <div className={style.screenshots}>
        {
          data?.screenshots.map(({ id, image }: Screenshot) => (
            <Image
              key={id}
              alt={`${id}-${data?.title}`}
              src={image}
              width={380}
              height={200}
            />
          ))
        }
      </div>
    );
  }, [data, isLoading]);

  if (isLoading) return (
    <div className={style.selectedGameCard}>
      <div>
        <Image
          src={data?.thumbnail as string}
          alt={data?.title}
          isLoading={isLoading} 
          width={500}
          height={250}
        />
        <div className={style.gameDetails}>
          <div className={style._requirements}>
            <div className={style.loading}/>
            {requirements}
          </div>
          <div>
            <div className={cn(style._title, style.loading)}/>
            <div className={style._content}>
              <div className={style._description}>
                <div className={style.loading}/>
                <div className={style.loading}/>
                <div className={style.loading}/>
                <div className={style.loading}/>
                <div className={style.loading}/>
                <div className={style.loading}/>
              </div>
              <div className={style.actions}>
                <NavButton to={'/'} label='GO BACK'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {screenshots}
    </div>
  );

  return (
    <div className={style.selectedGameCard}>
      <div>
        <Image
          src={data?.thumbnail as string}
          alt={data?.title}
          width={500}
          height={250}
        />
        <div className={style.gameDetails}>
          <div>
            <h2 className={cn(style.h2, style.primary)}>{upperCase('Requirements')}</h2>
            {requirements}
          </div>
          <div>
            <h2 className={cn(style.h2, style.primary)}>{upperCase(data?.title)}</h2>
            <div className={style.content}>
              <Description content={data?.description ?? ''}/>
              <div className={style.actions}>
                <NavButton to={'/'} label='Back'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {screenshots}
    </div>
  );
};

export default SelectedGameCard;
