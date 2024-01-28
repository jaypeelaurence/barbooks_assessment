import * as Yup from 'yup';

export const GAME_FILTER_SCHEMA = Yup.object().shape({
  platform: Yup.string(),
  category: Yup.string(),
  'sort-by': Yup.date(),
  title: Yup.string(),
  tag: Yup.array(Yup.string()),
});

export type GAME_FILTER_FORM = Yup.InferType<typeof GAME_FILTER_SCHEMA>;