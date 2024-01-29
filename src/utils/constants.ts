const ENUM_TOAST_TYPE = ['success', 'error', 'info', 'warning', 'default'];

export type TOAST_TYPE = (typeof ENUM_TOAST_TYPE)[number];

const ENUM_ERROR_STATUS_CODES: number[] = [400, 401, 403, 404, 422, 429, 500];

export type ERROR_STATUS_CODES = (typeof ENUM_ERROR_STATUS_CODES)[number];

const ENUM_SORT_BY: string[] = ['release-date', 'alphabetical', 'relevance'];

export type SORT_BY = (typeof ENUM_SORT_BY)[number];

const ENUM_CATEGORIES: string[] = [
  'mmorpg',
  'shooter',
  'strategy',
  'moba',
  'racing',
  'sports',
  'social',
  'sandbox',
  'open-world',
  'survival',
  'pvp',
  'pve',
  'pixel',
  'voxel',
  'zombie',
  'turn-based',
  'first-person',
  'third-Person',
  'top-down',
  'tank',
  'space',
  'sailing',
  'side-scroller',
  'superhero',
  'permadeath',
  'card',
  'battle-royale',
  'mmo',
  'mmofps',
  'mmotps',
  '3d',
  '2d',
  'anime',
  'fantasy',
  'sci-fi',
  'fighting',
  'action-rpg',
  'action',
  'military',
  'martial-arts',
  'flight',
  'low-spec',
  'tower-defense',
  'horror',
  'mmorts'
];

export type CATEGORIES = (typeof ENUM_CATEGORIES)[number];

const ENUM_PLATFORM: { label: string, value: string }[] = [
  {
    label: 'PC (Windows)',
    value: 'pc',
  },
  {
    label: 'Web Browser',
    value: 'browser',
  },
]

const PLATFORM: string[] =
  Object.entries(ENUM_PLATFORM)
  .reduce((a: string[], [, { label }]: any) => ([...a, label]), []) ;

export type PLATFORM = (typeof PLATFORM)[number];

export default {
  ENUM_PLATFORM,
  PLATFORM,
  ENUM_CATEGORIES,
  ENUM_TOAST_TYPE,
  ENUM_SORT_BY,
  ENUM_ERROR_STATUS_CODES,
};
