import { FC, useMemo } from 'react';

import cn from 'classnames';
import { Image, NavButton } from 'ui/components/common';
import { lowerCase, startCase } from 'lodash';
import { genearateRandomArray  } from 'utils/helpers';
import style from 'assets/styles/style.module.scss';

import { Game, Screenshot, SystemRequirements } from '../utils/types';

interface PROPS {
  data?: Game,
  isLoading?: boolean,
}

const SelectedGameCard: FC<PROPS> = ({ data, isLoading }) => {
  const requirements = useMemo(() => {
    if (isLoading) return genearateRandomArray(5).map((id) => (
      <div key={id}>
        <div>r---</div>
        <div>d---</div>
      </div>
    ));

    const minReq = Object.entries((data?.minimumSystemRequirements ?? {}) as SystemRequirements);

    return minReq.map(([label, value]) => (
      <div key={label}>
        <h3 className={cn(style.h3)}>{startCase(lowerCase(label))}</h3>
        <p className={cn(style.p)}>{value}</p>
      </div>
    ));
  }, [data, isLoading]);
  
  const screenshots = useMemo(() => {
    if (isLoading) return genearateRandomArray(3)
      .map((id) => <Image key={id} alt={String(id)} src={String(id)} isLoading={true}/>);

    return data?.screenshots.map(({ id, image }: Screenshot) => (
      <Image key={id} alt={`${id}-${data?.title}`} src={image} />
    ))
  }, [data, isLoading]);

  if (isLoading) return (
    <div>
      <div>
        <Image src={data?.thumbnail as string} alt={data?.title} isLoading={isLoading} />
        <div>
          <div>
            <div>
              <div>---</div>
              {requirements}
            </div>
            <div>
              <div>---</div>
              <p>---</p>
            </div>
          </div>
          <NavButton to={'/'} label='Back'/>
        </div>
      </div>
      <div>
        {screenshots}
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Image src={data?.thumbnail as string} alt={data?.title} />
        <div className={cn(style.background)}>
          <div>
            <div>
              <h2 className={cn(style.h2, style.primary)}>Requirements</h2>
              {requirements}
            </div>
            <div>
              <h2 className={cn(style.h2, style.primary)}>{data?.title}</h2>
              <p className={cn(style.p)}>{data?.description}</p>
            </div>
          </div>
          <NavButton to={'/'} label='Back'/>
        </div>
      </div>
      <div>
        {screenshots}
      </div>
    </div>
  );
};

export default SelectedGameCard;
