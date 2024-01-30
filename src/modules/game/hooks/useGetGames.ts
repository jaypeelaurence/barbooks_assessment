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

  return useQuery<Games[], Error>({
    queryKey: [gc.KEYS.GAMES, params],
    queryFn: async () => {
      const api = new Api(args);

      const { category, platform } = params;

      console.log(category);

      try {
        if (platform) {
          const _platform: string | undefined =
            c.ENUM_PLATFORM.find(({ label }) => label === platform)?.value;
  
          if (_platform) {
            params.platform = _platform;
          }
        }

        let cat = false;

        if (category) {
          if (category.length > 1) {
            cat = true;

            params.tag = category
            delete params.category;
          } else {
            params.category = category;
          }
        }
  
        const data: Games[] | any = await api.get({
          url: cat ? 'api/filter' : 'api/games',
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
