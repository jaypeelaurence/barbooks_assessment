import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Api from 'hooks/Api';
import c from 'modules/game/utils/constants';
import { Game } from 'modules/game/utils/types';
import { toastError } from 'ui/partials/Toast';
import { useProvider } from 'utils/providers/Provider';

export default function useGetGame(id: string, options?: UseQueryOptions) {
  const { state } = useProvider();
  const args = state;

  return useQuery<Game, Error>({
    queryKey: [c.KEYS.GAME, id],
    queryFn: async () => {
      const api = new Api(args);

      try {
        const data: Game = await api.get({
          url: 'api/game',
          params: { id }
        });

        const { status, statusMessage } = data;

        if (status === 0) throw new Error(statusMessage);

        return data;
      } catch (err: any) {
        toastError(err?.message);
      }
    },
    ...options as any,
  });
}
