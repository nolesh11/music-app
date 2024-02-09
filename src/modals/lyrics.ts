export interface LyricsResponse {
  lyrics: Lyrics;
}

export interface Lyrics {
  _type: string;
  api_path: string;
  lyrics: Lyrics2;
  path: string;
  song_id: number;
  trackingData: TrackingData;
}

export interface Lyrics2 {
  body: Body;
}

export interface Body {
  html: string;
  children: [Children, string];
  tag: string;
  plain: string;
}

export interface Children {
  children: any[]; // eslint-disable-line
  tag: string;
}

export interface TrackingData {
  "Song ID": number;
  Title: string;
  "Primary Artist": string;
  "Primary Artist ID": number;
  "Primary Album": string;
  "Primary Album ID": number;
  Tag: string;
  "Primary Tag": string;
  "Primary Tag ID": number;
  "Music?": boolean;
  "Annotatable Type": string;
  "Annotatable ID": number;
  featured_video: boolean;
  cohort_ids: number[];
  has_verified_callout: boolean;
  has_featured_annotation: boolean;
  created_at: string;
  created_month: string;
  created_year: number;
  song_tier: string;
  "Has Recirculated Articles": boolean;
  "Lyrics Language": string;
  "Has Apple Match": boolean;
  "Release Date": string;
  "NRM Tier": number;
  "NRM Target Date": string;
  "Has Description": boolean;
  "Has Youtube URL": boolean;
  "Has Translation Q&A": boolean;
  "Comment Count": number;
  hot: boolean;
  web_interstitial_variant: string;
  two_column_song_page: boolean;
  platform_variant: string;
}
