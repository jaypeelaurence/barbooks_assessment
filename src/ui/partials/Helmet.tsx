import { FC, useMemo } from 'react';

import { Helmet } from 'react-helmet';

interface PROPS {
  title?: string
}

const _Helmet: FC<PROPS> = ({ title }) => {
  const _title = useMemo(() => {
    if (title) return title;

    return import.meta.env.VITE_APP_TITLE;
  }, [title]);

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{_title}</title>
    </Helmet>
  );
};

export default _Helmet;