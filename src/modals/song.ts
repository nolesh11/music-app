export interface SongResponse {
  song: Song
}

export interface Song {
  _type: string
  annotation_count: number
  api_path: string
  apple_music_id: string
  apple_music_player_url: string
  artist_names: string
  comment_count: number
  custom_header_image_url: string
  custom_song_art_image_url: string
  description: Description
  description_preview: string
  embed_content: string
  explicit: boolean
  facebook_share_message_without_url: string
  featured_video: boolean
  full_title: string
  has_instagram_reel_annotations: any// eslint-disable-line
  header_image_thumbnail_url: string
  header_image_url: string
  hidden: boolean
  id: number
  instrumental: boolean
  is_music: boolean
  lyrics_owner_id: number
  lyrics_placeholder_reason: any// eslint-disable-line
  lyrics_state: string
  lyrics_updated_at: number
  path: string
  pending_lyrics_edits_count: number
  published: boolean
  pusher_channel: string
  pyongs_count: number
  recording_location: string
  release_date: string
  release_date_components: ReleaseDateComponents
  release_date_for_display: string
  share_url: string
  song_art_image_thumbnail_url: string
  song_art_image_url: string
  soundcloud_url: any// eslint-disable-line
  spotify_uuid: string
  stats: Stats
  title: string
  title_with_featured: string
  tracking_data: TrackingDaum[]
  tracking_paths: TrackingPaths
  twitter_share_message: string
  twitter_share_message_without_url: string
  updated_by_human_at: number
  url: string
  viewable_by_roles: any[] // eslint-disable-line
  vttp_id: any// eslint-disable-line
  youtube_start: string
  youtube_url: string
  current_user_metadata: CurrentUserMetadata
  album: Album
  albums: Album2[]
  custom_performances: CustomPerformance[]
  description_annotation: DescriptionAnnotation
  featured_artists: any[]// eslint-disable-line
  lyrics_marked_complete_by: LyricsMarkedCompleteBy
  media: Medum[]
  primary_artist: PrimaryArtist
  primary_tag: PrimaryTag
  producer_artists: ProducerArtist[]
  song_relationships: SongRelationship[]
  tags: Tag[]
  top_scholar: TopScholar
  verified_annotations_by: VerifiedAnnotationsBy[]
  verified_contributors: VerifiedContributor[]
  verified_lyrics_by: VerifiedLyricsBy[]
  writer_artists: WriterArtist[]
}

export interface Description {
  dom: Dom
}

export interface Dom {
  tag: string
  children: [
    Children,
    string,
    Children4,
    string,
    Children5,
    string,
    Children7,
    string,
    Children9
  ]
}

export interface Children {
  tag: string
  children: [Children2, string, Children3, string]
}

export interface Children2 {
  tag: string
  attributes: Attributes
  data: Data
  children: string[]
}

export interface Attributes {
  href: string
  rel: string
}

export interface Data {
  api_path: string
}

export interface Children3 {
  tag: string
  attributes: Attributes2
  data: Data2
  children: string[]
}

export interface Attributes2 {
  href: string
  rel: string
}

export interface Data2 {
  api_path: string
}

export interface Children4 {
  tag: string
  children: string[]
}

export interface Children5 {
  tag: string
  children: Children6[]
}

export interface Children6 {
  tag: string
  children: string[]
}

export interface Children7 {
  tag: string
  children: Children8[]
}

export interface Children8 {
  tag: string
  children: string[]
}

export interface Children9 {
  tag: string
  children: Children10[]
}

export interface Children10 {
  tag: string
  attributes: Attributes3
  children: string[]
}

export interface Attributes3 {
  href: string
  rel: string
}

export interface ReleaseDateComponents {
  year: number
  month: number
  day: number
}

export interface Stats {
  accepted_annotations: number
  contributors: number
  iq_earners: number
  transcribers: number
  unreviewed_annotations: number
  verified_annotations: number
  hot: boolean
  pageviews: number
}

export interface TrackingDaum {
  key: string
  value: any// eslint-disable-line
}

export interface TrackingPaths {
  aggregate: string
  concurrent: string
}

export interface CurrentUserMetadata {
  permissions: string[]
  excluded_permissions: string[]
  interactions: Interactions
  relationships: Relationships
  iq_by_action: IqByAction
}

export interface Interactions {
  pyong: boolean
  following: boolean
}

export interface Relationships {}

export interface IqByAction {}

export interface Album {
  _type: string
  api_path: string
  cover_art_thumbnail_url: string
  cover_art_url: string
  full_title: string
  id: number
  name: string
  name_with_artist: string
  release_date_components: ReleaseDateComponents2
  url: string
  artist: Artist
}

export interface ReleaseDateComponents2 {
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

export interface Album2 {
  _type: string
  api_path: string
  cover_art_thumbnail_url: string
  cover_art_url: string
  full_title: string
  id: number
  name: string
  name_with_artist: string
  release_date_components: ReleaseDateComponents3
  url: string
  artist: Artist2
}

export interface ReleaseDateComponents3 {
  year: number
  month: number
  day: number
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

export interface CustomPerformance {
  label: string
  artists: Artist3[]
}

export interface Artist3 {
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
  song_id: number
  url: string
  verified_annotator_ids: any[]// eslint-disable-line
  current_user_metadata: CurrentUserMetadata2
  tracking_paths: TrackingPaths2
  twitter_share_message: string
  annotatable: Annotatable
  annotations: Annotation[]
}

export interface Range {
  content: string
}

export interface CurrentUserMetadata2 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  relationships: Relationships2
}

export interface Relationships2 {}

export interface TrackingPaths2 {
  aggregate: string
  concurrent: string
}

export interface Annotatable {
  _type: string
  api_path: string
  client_timestamps: ClientTimestamps
  context: string
  id: number
  image_url: string
  link_title: string
  title: string
  type: string
  url: string
}

export interface ClientTimestamps {
  updated_by_human_at: number
  lyrics_updated_at: number
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
  pyongs_count: number
  referent_id: number
  share_url: string
  source: any// eslint-disable-line
  state: string
  twitter_share_message: string
  url: string
  verified: boolean
  votes_total: number
  current_user_metadata: CurrentUserMetadata3
  accepted_by: AcceptedBy
  authors: Author[]
  cosigned_by: any[]// eslint-disable-line
  created_by: CreatedBy
  rejection_comment: any// eslint-disable-line
  top_comment: TopComment
  verified_by: any// eslint-disable-line
}

export interface Body {
  dom: Dom2
}

export interface Dom2 {
  tag: string
  children: [
    Children11,
    string,
    Children14,
    string,
    Children15,
    string,
    Children17,
    string,
    Children19
  ]
}

export interface Children11 {
  tag: string
  children: [Children12, string, Children13, string]
}

export interface Children12 {
  tag: string
  attributes: Attributes4
  data: Data3
  children: string[]
}

export interface Attributes4 {
  href: string
  rel: string
}

export interface Data3 {
  api_path: string
}

export interface Children13 {
  tag: string
  attributes: Attributes5
  data: Data4
  children: string[]
}

export interface Attributes5 {
  href: string
  rel: string
}

export interface Data4 {
  api_path: string
}

export interface Children14 {
  tag: string
  children: string[]
}

export interface Children15 {
  tag: string
  children: Children16[]
}

export interface Children16 {
  tag: string
  children: string[]
}

export interface Children17 {
  tag: string
  children: Children18[]
}

export interface Children18 {
  tag: string
  children: string[]
}

export interface Children19 {
  tag: string
  children: Children20[]
}

export interface Children20 {
  tag: string
  attributes: Attributes6
  children: string[]
}

export interface Attributes6 {
  href: string
  rel: string
}

export interface CurrentUserMetadata3 {
  permissions: string[]
  excluded_permissions: string[]
  interactions: Interactions2
  iq_by_action: IqByAction2
}

export interface Interactions2 {
  cosign: boolean
  pyong: boolean
  vote: any// eslint-disable-line
}

export interface IqByAction2 {}

export interface AcceptedBy {
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
  current_user_metadata: CurrentUserMetadata4
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

export interface CurrentUserMetadata4 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions3
}

export interface Interactions3 {
  following: boolean
}

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
  current_user_metadata: CurrentUserMetadata5
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

export interface CurrentUserMetadata5 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions4
}

export interface Interactions4 {
  following: boolean
}

export interface CreatedBy {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar3
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

export interface Avatar3 {
  tiny: Tiny3
  thumb: Thumb3
  small: Small3
  medium: Medium3
}

export interface Tiny3 {
  url: string
  bounding_box: BoundingBox9
}

export interface BoundingBox9 {
  width: number
  height: number
}

export interface Thumb3 {
  url: string
  bounding_box: BoundingBox10
}

export interface BoundingBox10 {
  width: number
  height: number
}

export interface Small3 {
  url: string
  bounding_box: BoundingBox11
}

export interface BoundingBox11 {
  width: number
  height: number
}

export interface Medium3 {
  url: string
  bounding_box: BoundingBox12
}

export interface BoundingBox12 {
  width: number
  height: number
}

export interface CurrentUserMetadata6 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions5
}

export interface Interactions5 {
  following: boolean
}

export interface TopComment {
  _type: string
  api_path: string
  body: Body2
  created_at: number
  has_voters: boolean
  id: number
  pinned_role: any// eslint-disable-line
  votes_total: number
  current_user_metadata: CurrentUserMetadata7
  anonymous_author: any// eslint-disable-line
  author: Author2
  reason: any// eslint-disable-line
}

export interface Body2 {
  dom: Dom3
}

export interface Dom3 {
  tag: string
  children: Children21[]
}

export interface Children21 {
  tag: string
  children: [string, Children22]
}

export interface Children22 {
  tag: string
  attributes: Attributes7
  data: Data5
  children: string[]
}

export interface Attributes7 {
  href: string
  rel: string
}

export interface Data5 {
  api_path: string
}

export interface CurrentUserMetadata7 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions6
}

export interface Interactions6 {
  vote: any// eslint-disable-line
}

export interface Author2 {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar4
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
  current_user_metadata: CurrentUserMetadata8
}

export interface Avatar4 {
  tiny: Tiny4
  thumb: Thumb4
  small: Small4
  medium: Medium4
}

export interface Tiny4 {
  url: string
  bounding_box: BoundingBox13
}

export interface BoundingBox13 {
  width: number
  height: number
}

export interface Thumb4 {
  url: string
  bounding_box: BoundingBox14
}

export interface BoundingBox14 {
  width: number
  height: number
}

export interface Small4 {
  url: string
  bounding_box: BoundingBox15
}

export interface BoundingBox15 {
  width: number
  height: number
}

export interface Medium4 {
  url: string
  bounding_box: BoundingBox16
}

export interface BoundingBox16 {
  width: number
  height: number
}

export interface CurrentUserMetadata8 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions7
}

export interface Interactions7 {
  following: boolean
}

export interface LyricsMarkedCompleteBy {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar5
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
  current_user_metadata: CurrentUserMetadata9
}

export interface Avatar5 {
  tiny: Tiny5
  thumb: Thumb5
  small: Small5
  medium: Medium5
}

export interface Tiny5 {
  url: string
  bounding_box: BoundingBox17
}

export interface BoundingBox17 {
  width: number
  height: number
}

export interface Thumb5 {
  url: string
  bounding_box: BoundingBox18
}

export interface BoundingBox18 {
  width: number
  height: number
}

export interface Small5 {
  url: string
  bounding_box: BoundingBox19
}

export interface BoundingBox19 {
  width: number
  height: number
}

export interface Medium5 {
  url: string
  bounding_box: BoundingBox20
}

export interface BoundingBox20 {
  width: number
  height: number
}

export interface CurrentUserMetadata9 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions8
}

export interface Interactions8 {
  following: boolean
}

export interface Medum {
  provider: string
  start?: number
  type: string
  url: string
  native_uri?: string
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

export interface PrimaryTag {
  _type: string
  id: number
  name: string
  primary: boolean
  url: string
}

export interface ProducerArtist {
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

export interface SongRelationship {
  _type: string
  relationship_type: string
  type: string
  songs: Song2[]
}

export interface Song2 {
  _type: string
  annotation_count: number
  api_path: string
  artist_names: string
  full_title: string
  header_image_thumbnail_url: string
  header_image_url: string
  id: number
  instrumental: boolean
  lyrics_owner_id: number
  lyrics_state: string
  lyrics_updated_at?: number
  path: string
  pyongs_count?: number
  song_art_image_thumbnail_url: string
  song_art_image_url: string
  stats: Stats2
  title: string
  title_with_featured: string
  updated_by_human_at: number
  url: string
  primary_artist: PrimaryArtist2
}

export interface Stats2 {
  unreviewed_annotations: number
  hot: boolean
  pageviews?: number
}

export interface PrimaryArtist2 {
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

export interface Tag {
  _type: string
  id: number
  name: string
  primary: boolean
  url: string
}

export interface TopScholar {
  _type: string
  attribution_value: number
  pinned_role: any// eslint-disable-line
  user: User2
}

export interface User2 {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar6
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
  current_user_metadata: CurrentUserMetadata10
}

export interface Avatar6 {
  tiny: Tiny6
  thumb: Thumb6
  small: Small6
  medium: Medium6
}

export interface Tiny6 {
  url: string
  bounding_box: BoundingBox21
}

export interface BoundingBox21 {
  width: number
  height: number
}

export interface Thumb6 {
  url: string
  bounding_box: BoundingBox22
}

export interface BoundingBox22 {
  width: number
  height: number
}

export interface Small6 {
  url: string
  bounding_box: BoundingBox23
}

export interface BoundingBox23 {
  width: number
  height: number
}

export interface Medium6 {
  url: string
  bounding_box: BoundingBox24
}

export interface BoundingBox24 {
  width: number
  height: number
}

export interface CurrentUserMetadata10 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions9
}

export interface Interactions9 {
  following: boolean
}

export interface VerifiedAnnotationsBy {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar7
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
  current_user_metadata: CurrentUserMetadata11
}

export interface Avatar7 {
  tiny: Tiny7
  thumb: Thumb7
  small: Small7
  medium: Medium7
}

export interface Tiny7 {
  url: string
  bounding_box: BoundingBox25
}

export interface BoundingBox25 {
  width: number
  height: number
}

export interface Thumb7 {
  url: string
  bounding_box: BoundingBox26
}

export interface BoundingBox26 {
  width: number
  height: number
}

export interface Small7 {
  url: string
  bounding_box: BoundingBox27
}

export interface BoundingBox27 {
  width: number
  height: number
}

export interface Medium7 {
  url: string
  bounding_box: BoundingBox28
}

export interface BoundingBox28 {
  width: number
  height: number
}

export interface CurrentUserMetadata11 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions10
}

export interface Interactions10 {
  following: boolean
}

export interface VerifiedContributor {
  contributions: string[]
  artist: Artist4
  user: User3
}

export interface Artist4 {
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

export interface User3 {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar8
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
  current_user_metadata: CurrentUserMetadata12
}

export interface Avatar8 {
  tiny: Tiny8
  thumb: Thumb8
  small: Small8
  medium: Medium8
}

export interface Tiny8 {
  url: string
  bounding_box: BoundingBox29
}

export interface BoundingBox29 {
  width: number
  height: number
}

export interface Thumb8 {
  url: string
  bounding_box: BoundingBox30
}

export interface BoundingBox30 {
  width: number
  height: number
}

export interface Small8 {
  url: string
  bounding_box: BoundingBox31
}

export interface BoundingBox31 {
  width: number
  height: number
}

export interface Medium8 {
  url: string
  bounding_box: BoundingBox32
}

export interface BoundingBox32 {
  width: number
  height: number
}

export interface CurrentUserMetadata12 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions11
}

export interface Interactions11 {
  following: boolean
}

export interface VerifiedLyricsBy {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar9
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
  current_user_metadata: CurrentUserMetadata13
}

export interface Avatar9 {
  tiny: Tiny9
  thumb: Thumb9
  small: Small9
  medium: Medium9
}

export interface Tiny9 {
  url: string
  bounding_box: BoundingBox33
}

export interface BoundingBox33 {
  width: number
  height: number
}

export interface Thumb9 {
  url: string
  bounding_box: BoundingBox34
}

export interface BoundingBox34 {
  width: number
  height: number
}

export interface Small9 {
  url: string
  bounding_box: BoundingBox35
}

export interface BoundingBox35 {
  width: number
  height: number
}

export interface Medium9 {
  url: string
  bounding_box: BoundingBox36
}

export interface BoundingBox36 {
  width: number
  height: number
}

export interface CurrentUserMetadata13 {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions12
}

export interface Interactions12 {
  following: boolean
}

export interface WriterArtist {
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
