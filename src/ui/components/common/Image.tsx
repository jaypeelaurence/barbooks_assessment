import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

interface PROPS {
  src: string;
  alt?: string;
  isLoading?: boolean;
  [key: string]: any;
}

const Image: FC<PROPS> = ({ src, alt, isLoading, ...props }) => {
  if (isLoading) return (
    <div>
      LOADING IMAGE
    </div>
  );

  return (
    <LazyLoadImage
      alt={alt}
      src={`${import.meta.env.VITE_APP_END_POINT}${src}`} // use normal <img> attributes as props
      {...props}
    />
  );
}

export default Image;
