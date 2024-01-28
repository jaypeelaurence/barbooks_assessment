import { useCallback } from 'react';

// eslint-disable-next-line import/named
import { URLSearchParamsInit, useSearchParams, SetURLSearchParams } from 'react-router-dom';

const useQueryParams = (filters?: URLSearchParamsInit):
  [Record<string, string | string[] | null>, SetURLSearchParams] => {
  const [query, setQuery] = useSearchParams(filters);

  const convertQueryToObject = useCallback(() => {
    const obj: Record<string, string | string[] | null> = {};
    for (const key of query.keys()) {
      if (query.getAll(key).length > 1) {
        obj[key] = query.getAll(key);
      } else {
        obj[key] = query.get(key);
      }
    }
    return obj;
  }, [query]);

  return [convertQueryToObject(), setQuery];
};

export default useQueryParams;
