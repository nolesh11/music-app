export interface ServerResponse {
  meta: Meta
  response: Response
  sections?: any //eslint-disable-line
}

export interface Meta {
  status: number
}

export interface Response {
  sections: Section[]
}

export interface Section {
  type: string
  hits: Hit[]
}

export interface Hit {
  highlights: Highlight[]
  index: string
  type: string
  result: Result
}

export interface Highlight {
  property: string
  value: string
  snippet: boolean
  ranges: Range[]
}

export interface Range {
  start: number
  end: number
}

export interface Result {
  _type: string
  api_path: string
  header_image_url?: string
  id: number
  image_url?: string
  index_character?: string
  is_meme_verified?: boolean
  is_verified?: boolean
  name?: string
  slug?: string
  url: string
  iq?: number
  annotation_count?: number
  artist_names?: string
  full_title?: string
  header_image_thumbnail_url?: string
  instrumental?: boolean
  lyrics_owner_id?: number
  lyrics_state?: string
  lyrics_updated_at?: number
  path?: string
  pyongs_count?: number
  song_art_image_thumbnail_url?: string
  song_art_image_url?: string
  stats?: Stats
  title?: string
  title_with_featured?: string
  updated_by_human_at?: number
  primary_artist?: PrimaryArtist
  cover_art_thumbnail_url?: string
  cover_art_url?: string
  name_with_artist?: string
  release_date_components?: ReleaseDateComponents
  artist?: Artist
  about_me_summary?: string
  avatar?: Avatar
  human_readable_role_for_display?: string
  login?: string
  role_for_display?: string
  current_user_metadata?: CurrentUserMetadata
}

export interface Stats {
  unreviewed_annotations: number
  hot: boolean
  pageviews: number
}

export interface PrimaryArtist {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
  iq: number
}

export interface ReleaseDateComponents {
  year: number
  month: number
  day: number
}

export interface Artist {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
  iq?: number
}

export interface Avatar {
  tiny: Tiny
  thumb: Thumb
  small: Small
  medium: Medium
}

export interface Tiny {
  url: string
  bounding_box: BoundingBox
}

export interface BoundingBox {
  width: number
  height: number
}

export interface Thumb {
  url: string
  bounding_box: BoundingBox2
}

export interface BoundingBox2 {
  width: number
  height: number
}

export interface Small {
  url: string
  bounding_box: BoundingBox3
}

export interface BoundingBox3 {
  width: number
  height: number
}

export interface Medium {
  url: string
  bounding_box: BoundingBox4
}

export interface BoundingBox4 {
  width: number
  height: number
}

export interface CurrentUserMetadata {
  permissions: any[] //eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions
}

export interface Interactions {
  following: boolean
}
