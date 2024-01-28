import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Api from 'hooks/Api';
import c from 'modules/game/utils/constants';
import { useProvider } from 'utils/providers/Provider';

export default function useGetCategories(options?: UseQueryOptions) {
  const { state } = useProvider();
  const args = state;

  return useQuery<string[], Error>({
    queryKey: [c.KEYS.CATEGORIES],
    queryFn: async () => {
      const api = new Api(args);

      const data: string[] = await api.get({
        url: 'api/categories',
      });

      return data;
    },
    ...options as any,
  });
}
