import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import Api from 'hooks/Api';
import gc from 'modules/game/utils/constants';
import { GAME_FILTER } from 'modules/game/containers/GameListing';
import { Games } from 'modules/game/utils/types';
import { useProvider } from 'utils/providers/Provider';
import c from 'utils/constants';
import { toastError } from 'ui/partials/Toast';

export default function useGetGames(params: GAME_FILTER, options?: UseQueryOptions) {
  const { state } = useProvider();
  const args = state;

  delete params.title;

  return useQuery<Games[], Error>({
    queryKey: [gc.KEYS.GAMES, params],
    queryFn: async () => {
      const api = new Api(args);

      const { tag, platform } = params;

      try {
        if (platform) {
          const _platform: string | undefined =
            c.ENUM_PLATFORM.find(({ label }) => label === platform)?.value;
  
          if (_platform) {
            params.platform = _platform;
          }
        }
  
        const data: Games[] | any = await api.get({
          url: tag ? 'api/filter' : 'api/games',
          params,
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
