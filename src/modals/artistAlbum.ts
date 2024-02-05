export interface IGetArtistAlbumResponse {
  meta: Meta
  response: Response
  albums?: any //eslint-disable-line
}

export interface Meta {
  status: number
}

export interface ArtistAlbumResponse {
  albums: Album[]
  next_page: any//eslint-disable-line
}

export interface Album {
  _type: string
  api_path: string
  cover_art_thumbnail_url: string
  cover_art_url: string
  full_title: string
  id: number
  name: string
  name_with_artist: string
  release_date_components?: ReleaseDateComponents
  url: string
  artist: Artist
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
  iq: number
}
