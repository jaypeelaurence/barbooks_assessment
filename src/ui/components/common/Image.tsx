import { FC, useMemo } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from 'assets/styles/style.module.scss';
import cn from 'classnames';

interface PROPS {
  src: string;
  alt?: string;
  isLoading?: boolean;
  className?: string | string[];
  [key: string]: any;
}

interface DIMENSIONS {
  width: number;
  height: number;
}

const Image: FC<PROPS> = ({ src, alt, isLoading, className, ...props }) => {
  const dimensions: DIMENSIONS = useMemo(() => {
    const _dim = {
      width: 300,
      height: 100,
    };

    if (props.width) _dim.width = props.width;
    if (props.height) _dim.height = props.height;

    return _dim;
  }, [props.width, props.height]);

  if (isLoading) return (
    <LazyLoadImage
      wrapperClassName={cn(
        className,
        style.image,
        style.loading,
      )}
      alt={'LOADING_IMAGE'}
      src={'/'}
      {...props}
    />
  );

  return (
    <LazyLoadImage
      wrapperClassName={cn(className, style.image)}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      src={`${import.meta.env.VITE_APP_END_POINT}${src}`}
      {...props}
      effect="blur"
    />
  );
}

export default Image;
