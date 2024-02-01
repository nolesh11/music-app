export interface AlbumResponse {
  album: Album
}

export interface Album {
  _type: string
  api_path: string
  comment_count: number
  cover_art_thumbnail_url: string
  cover_art_url: string
  custom_header_image_url: any // eslint-disable-line
  description_preview: string
  full_title: string
  header_image_url: string
  id: number
  lock_state: string
  name: string
  name_with_artist: string
  pyongs_count: number
  release_date: string
  release_date_components: ReleaseDateComponents
  release_date_for_display: string
  tracking_paths: TrackingPaths
  url: string
  current_user_metadata: CurrentUserMetadata
  song_pageviews: number
  artist: Artist
  cover_arts: CoverArt[]
  description_annotation: DescriptionAnnotation
  performance_groups: any[]// eslint-disable-line
  song_performances: SongPerformance[]
}

export interface ReleaseDateComponents {
  year: number
  month: number
  day: number
}

export interface TrackingPaths {
  aggregate: string
  concurrent: string
}

export interface CurrentUserMetadata {
  permissions: string[]
  excluded_permissions: string[]
  interactions: Interactions
}

export interface Interactions {
  pyong: boolean
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

export interface CoverArt {
  _type: string
  annotated: boolean
  api_path: string
  id: number
  image_url: string
  thumbnail_image_url: string
  url: string
  current_user_metadata: CurrentUserMetadata2
}

export interface CurrentUserMetadata2 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
}

export interface DescriptionAnnotation {
  _type: string
  annotator_id: number
  annotator_login: string
  api_path: string
  classification: string
  fragment: string
  id: number
  ios_app_url: string
  is_description: boolean
  is_image: boolean
  path: string
  range: Range
  song_id: any// eslint-disable-line
  url: string
  verified_annotator_ids: any[]// eslint-disable-line
  current_user_metadata: CurrentUserMetadata3
  tracking_paths: TrackingPaths2
  twitter_share_message: string
  annotatable: Annotatable
  annotations: Annotation[]
}

export interface Range {
  content: string
}

export interface CurrentUserMetadata3 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  relationships: Relationships
}

export interface Relationships {}

export interface TrackingPaths2 {
  aggregate: string
  concurrent: string
}

export interface Annotatable {
  _type: string
  api_path: string
  context: string
  id: number
  image_url: string
  link_title: string
  title: string
  type: string
  url: string
}

export interface Annotation {
  _type: string
  api_path: string
  being_created: boolean
  body: Body
  comment_count: number
  community: boolean
  created_at: number
  custom_preview: any// eslint-disable-line
  deleted: boolean
  embed_content: string
  has_voters: boolean
  id: number
  needs_exegesis: boolean
  pinned: boolean
  proposed_edit_count: number
  pyongs_count: any// eslint-disable-line
  referent_id: number
  share_url: string
  source: any// eslint-disable-line
  state: string
  twitter_share_message: string
  url: string
  verified: boolean
  votes_total: number
  current_user_metadata: CurrentUserMetadata4
  accepted_by: any// eslint-disable-line
  authors: Author[]
  cosigned_by: any[]// eslint-disable-line
  created_by: CreatedBy
  rejection_comment: any// eslint-disable-line
  top_comment: any// eslint-disable-line
  verified_by: any// eslint-disable-line
}

export interface Body {
  html: string
}

export interface CurrentUserMetadata4 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions2
  iq_by_action: IqByAction
}

export interface Interactions2 {
  cosign: boolean
  pyong: boolean
  vote: any// eslint-disable-line
}

export interface IqByAction {}

export interface Author {
  _type: string
  attribution: number
  pinned_role: any// eslint-disable-line
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
  current_user_metadata: CurrentUserMetadata5
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

export interface CurrentUserMetadata5 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions3
}

export interface Interactions3 {
  following: boolean
}

export interface CreatedBy {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar2
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
  current_user_metadata: CurrentUserMetadata6
}

export interface Avatar2 {
  tiny: Tiny2
  thumb: Thumb2
  small: Small2
  medium: Medium2
}

export interface Tiny2 {
  url: string
  bounding_box: BoundingBox5
}

export interface BoundingBox5 {
  width: number
  height: number
}

export interface Thumb2 {
  url: string
  bounding_box: BoundingBox6
}

export interface BoundingBox6 {
  width: number
  height: number
}

export interface Small2 {
  url: string
  bounding_box: BoundingBox7
}

export interface BoundingBox7 {
  width: number
  height: number
}

export interface Medium2 {
  url: string
  bounding_box: BoundingBox8
}

export interface BoundingBox8 {
  width: number
  height: number
}

export interface CurrentUserMetadata6 {
  permissions: any[] //eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions4
}

export interface Interactions4 {
  following: boolean
}

export interface SongPerformance {
  label: string
  artists: Artist2[]
}

export interface Artist2 {
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
