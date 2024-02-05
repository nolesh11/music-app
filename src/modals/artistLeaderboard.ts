export interface IGetArtistLeaderboard {
  leaderboard: Leaderboard[]
  next_page: number
}

export interface Leaderboard {
  _type: string
  attribution_value: number
  pinned_role: any//eslint-disable-line
  user: User
}

export interface User {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar
  header_image_url: string
  human_readable_role_for_display: string
  id: number
  iq: number
  is_meme_verified: boolean
  is_verified: boolean
  login: string
  name: string
  role_for_display: string
  url: string
  current_user_metadata: CurrentUserMetadata
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
