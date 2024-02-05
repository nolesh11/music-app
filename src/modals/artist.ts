export interface IGetArtistResponse {
  meta: Meta
  response: Response
  artist?: any //eslint-disable-line
}

export interface Meta {
  status: number
}

export interface ArtistResponse {
  artist: Artist
}

export interface Artist {
  _type: string
  alternate_names: string[]
  api_path: string
  description: Description
  description_preview: string
  facebook_name: string
  followers_count: number
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  instagram_name: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  tracking_paths: TrackingPaths
  translation_artist: boolean
  twitter_name: string
  url: string
  current_user_metadata: CurrentUserMetadata
  iq: number
  description_annotation: DescriptionAnnotation
  user: User2
}

export interface Description {
  dom: Dom
}

export interface Dom {
  tag: string
  children: [Children, string, Children2, string, Children5, string, Children8]
}

export interface Children {
  tag: string
  children: string[]
}

export interface Children2 {
  tag: string
  children: [string, Children3, string, Children4, string]
}

export interface Children3 {
  tag: string
  attributes: Attributes
  children: string[]
}

export interface Attributes {
  href: string
  rel: string
}

export interface Children4 {
  tag: string
  attributes: Attributes2
  children: string[]
}

export interface Attributes2 {
  href: string
  rel: string
}

export interface Children5 {
  tag: string
  children: [string, Children6, string, Children7, string]
}

export interface Children6 {
  tag: string
  attributes: Attributes3
  data: Data
  children: string[]
}

export interface Attributes3 {
  href: string
  rel: string
}

export interface Data {
  api_path: string
}

export interface Children7 {
  tag: string
  attributes: Attributes4
  data: Data2
  children: string[]
}

export interface Attributes4 {
  href: string
  rel: string
}

export interface Data2 {
  api_path: string
}

export interface Children8 {
  tag: string
  children: [
    string,
    Children9,
    string,
    Children10,
    string,
    Children11,
    string,
    Children12,
    string
  ]
}

export interface Children9 {
  tag: string
  attributes: Attributes5
  data: Data3
  children: string[]
}

export interface Attributes5 {
  href: string
  rel: string
}

export interface Data3 {
  api_path: string
}

export interface Children10 {
  tag: string
  attributes: Attributes6
  data: Data4
  children: string[]
}

export interface Attributes6 {
  href: string
  rel: string
}

export interface Data4 {
  api_path: string
}

export interface Children11 {
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

export interface Children12 {
  tag: string
  attributes: Attributes8
  data: Data6
  children: Children13[]
}

export interface Attributes8 {
  href: string
  rel: string
}

export interface Data6 {
  api_path: string
}

export interface Children13 {
  tag: string
  children: string[]
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
  following: boolean
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
  song_id: any //eslint-disable-line
  url: string
  verified_annotator_ids: any[]//eslint-disable-line
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
  permissions: any[]//eslint-disable-line
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
  context: any//eslint-disable-line
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
  custom_preview: any//eslint-disable-line
  deleted: boolean
  embed_content: string
  has_voters: boolean
  id: number
  needs_exegesis: boolean
  pinned: boolean
  proposed_edit_count: number
  pyongs_count: any//eslint-disable-line
  referent_id: number
  share_url: string
  source: any//eslint-disable-line
  state: string
  twitter_share_message: string
  url: string
  verified: boolean
  votes_total: number
  current_user_metadata: CurrentUserMetadata3
  accepted_by: AcceptedBy
  authors: Author[]
  cosigned_by: any[]//eslint-disable-line
  created_by: CreatedBy
  rejection_comment: any//eslint-disable-line
  top_comment: TopComment
  verified_by: any//eslint-disable-line
}

export interface Body {
  dom: Dom2
}

export interface Dom2 {
  tag: string
  children: [
    Children14,
    string,
    Children15,
    string,
    Children18,
    string,
    Children21
  ]
}

export interface Children14 {
  tag: string
  children: string[]
}

export interface Children15 {
  tag: string
  children: [string, Children16, string, Children17, string]
}

export interface Children16 {
  tag: string
  attributes: Attributes9
  children: string[]
}

export interface Attributes9 {
  href: string
  rel: string
}

export interface Children17 {
  tag: string
  attributes: Attributes10
  children: string[]
}

export interface Attributes10 {
  href: string
  rel: string
}

export interface Children18 {
  tag: string
  children: [string, Children19, string, Children20, string]
}

export interface Children19 {
  tag: string
  attributes: Attributes11
  data: Data7
  children: string[]
}

export interface Attributes11 {
  href: string
  rel: string
}

export interface Data7 {
  api_path: string
}

export interface Children20 {
  tag: string
  attributes: Attributes12
  data: Data8
  children: string[]
}

export interface Attributes12 {
  href: string
  rel: string
}

export interface Data8 {
  api_path: string
}

export interface Children21 {
  tag: string
  children: [
    string,
    Children22,
    string,
    Children23,
    string,
    Children24,
    string,
    Children25,
    string
  ]
}

export interface Children22 {
  tag: string
  attributes: Attributes13
  data: Data9
  children: string[]
}

export interface Attributes13 {
  href: string
  rel: string
}

export interface Data9 {
  api_path: string
}

export interface Children23 {
  tag: string
  attributes: Attributes14
  data: Data10
  children: string[]
}

export interface Attributes14 {
  href: string
  rel: string
}

export interface Data10 {
  api_path: string
}

export interface Children24 {
  tag: string
  attributes: Attributes15
  data: Data11
  children: string[]
}

export interface Attributes15 {
  href: string
  rel: string
}

export interface Data11 {
  api_path: string
}

export interface Children25 {
  tag: string
  attributes: Attributes16
  data: Data12
  children: Children26[]
}

export interface Attributes16 {
  href: string
  rel: string
}

export interface Data12 {
  api_path: string
}

export interface Children26 {
  tag: string
  children: string[]
}

export interface CurrentUserMetadata3 {
  permissions: string[]
  excluded_permissions: string[]
  interactions: Interactions2
  iq_by_action: IqByAction
}

export interface Interactions2 {
  cosign: boolean
  pyong: boolean
  vote: any//eslint-disable-line
}

export interface IqByAction {}

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
  permissions: any[]//eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions3
}

export interface Interactions3 {
  following: boolean
}

export interface Author {
  _type: string
  attribution: number
  pinned_role: any//eslint-disable-line
  user: User
}

export interface User {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar2
  header_image_url: string
  human_readable_role_for_display?: string
  id: number
  iq: number
  is_meme_verified: boolean
  is_verified: boolean
  login: string
  name: string
  role_for_display?: string
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
  permissions: any[]//eslint-disable-line
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
  permissions: any[]//eslint-disable-line
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
  pinned_role: any//eslint-disable-line
  votes_total: number
  current_user_metadata: CurrentUserMetadata7
  anonymous_author: any//eslint-disable-line
  author: Author2
  reason: any//eslint-disable-line
}

export interface Body2 {
  dom: Dom3
}

export interface Dom3 {
  tag: string
  children: Children27[]
}

export interface Children27 {
  tag: string
  children: string[]
}

export interface CurrentUserMetadata7 {
  permissions: any[]//eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions6
}

export interface Interactions6 {
  vote: any//eslint-disable-line
}

export interface Author2 {
  _type: string
  about_me_summary: string
  api_path: string
  avatar: Avatar4
  header_image_url: string
  human_readable_role_for_display: any//eslint-disable-line
  id: number
  iq: number
  is_meme_verified: boolean
  is_verified: boolean
  login: string
  name: string
  role_for_display: any//eslint-disable-line
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
  permissions: any[]//eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions7
}

export interface Interactions7 {
  following: boolean
}

export interface User2 {
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
  permissions: any[]//eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions8
}

export interface Interactions8 {
  following: boolean
}
