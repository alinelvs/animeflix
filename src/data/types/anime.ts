interface Links3 {
  first: string
  next: string
  last: string
}

interface Links2 {
  self: string
  related: string
}

interface Genres {
  links: Links2
}
interface Relationships {
  genres: Genres
  categories: Genres
  castings: Genres
  installments: Genres
  mappings: Genres
  reviews: Genres
  mediaRelationships: Genres
  characters: Genres
  staff: Genres
  productions: Genres
  quotes: Genres
  episodes: Genres
  streamingLinks: Genres
  animeProductions: Genres
  animeCharacters: Genres
  animeStaff: Genres
}

interface Tiny {
  width: number
  height: number
}

interface Dimensions {
  tiny: Tiny
  large: Tiny
  small: Tiny
  medium: Tiny
}

interface Dimensions2 {
  tiny: Tiny
  large: Tiny
  small: Tiny
}

interface Meta {
  dimensions: Dimensions
}

interface PosterImage {
  tiny: string
  large: string
  small: string
  medium: string
  original: string
  meta: Meta
}

interface RatingFrequencies {
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
  '10': string
  '11': string
  '12': string
  '13': string
  '14': string
  '15': string
  '16': string
  '17': string
  '18': string
  '19': string
  '20': string
}
interface Titles {
  en?: string
  en_jp: string
  ja_jp: string
  en_us?: string
}
interface Links {
  self: string
}

interface Meta2 {
  dimensions: Dimensions2
}

interface CoverImage {
  tiny: string
  large: string
  small: string
  original: string
  meta: Meta2
}

interface Meta3 {
  count: number
}

interface Attributes {
  createdAt: string
  updatedAt: string
  slug: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: Titles
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: string
  ratingFrequencies: RatingFrequencies
  userCount: number
  favoritesCount: number
  startDate: string
  endDate: string
  nextRelease?: string
  popularityRank: number
  ratingRank: number
  ageRating: string
  ageRatingGuide: string
  subtype: string
  status: string
  tba?: string
  posterImage: PosterImage
  coverImage: CoverImage
  episodeCount: number
  episodeLength?: number
  totalLength: number
  youtubeVideoId: string
  showType: string
  nsfw: boolean
}

export interface Data {
  id: string
  type: string
  links: Links
  attributes: Attributes
  relationships: Relationships
}

export interface Anime {
  data: Data
  meta: Meta3
  links: Links3
}
