import { CATEGORIES, PLATFORM } from 'utils/constants';

export interface SystemRequirements {
  os: string,
  processor: string,
  memory: string,
  graphics: string,
  storage: string,
}

export interface Screenshot {
  id: number,
  image: string,
}

export interface Games {
  id: number,
  title: string,
  thumbnail: string,
  shortDescription: string,
  genre: CATEGORIES,
  platform: PLATFORM,
  publisher: string,
  developer: string,
  releaseDate: Date,
}

export interface Game extends Games {
  description: string,
  minimumSystemRequirements: SystemRequirements,
  screenshots: Screenshot[],
  status: string | number,
  statusMessage: string,
}
