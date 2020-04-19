export interface UserMention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface Thumb {
  w: number;
  h: number;
  resize: string;
}

export interface Small {
  w: number;
  h: number;
  resize: string;
}

export interface Medium2 {
  w: number;
  h: number;
  resize: string;
}

export interface Large {
  w: number;
  h: number;
  resize: string;
}

export interface Sizes {
  thumb: Thumb;
  small: Small;
  medium: Medium2;
  large: Large;
}

export interface Medium {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes;
}

export interface Entities {
  hashtags: any[];
  symbols: any[];
  user_mentions: UserMention[];
  urls: any[];
  media: Medium[];
}

export interface Thumb2 {
  w: number;
  h: number;
  resize: string;
}

export interface Small2 {
  w: number;
  h: number;
  resize: string;
}

export interface Medium4 {
  w: number;
  h: number;
  resize: string;
}

export interface Large2 {
  w: number;
  h: number;
  resize: string;
}

export interface Sizes2 {
  thumb: Thumb2;
  small: Small2;
  medium: Medium4;
  large: Large2;
}

export interface Variant {
  bitrate: number;
  content_type: string;
  url: string;
}

export interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

export interface AdditionalMediaInfo {
  title: string;
  description: string;
  embeddable: boolean;
  monetizable: boolean;
}

export interface Medium3 {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes2;
  video_info: VideoInfo;
  additional_media_info: AdditionalMediaInfo;
}

export interface ExtendedEntities {
  media: Medium3[];
}

export interface Url2 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Url {
  urls: Url2[];
}

export interface Description {
  urls: any[];
}

export interface Entities2 {
  url: Url;
  description: Description;
}

export interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities2;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang?: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following?: any;
  follow_request_sent?: any;
  notifications?: any;
  translator_type: string;
}

export interface TwitterPostApiResponse {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  full_text: string;
  truncated: boolean;
  entities: Entities;
  extended_entities: ExtendedEntities;
  source: string;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: User;
  geo?: any;
  quoted_status_id_str?: string;
  coordinates?: any;
  place?: any;
  contributors?: any;
  is_quote_status: boolean;
  quoted_status: any;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  possibly_sensitive_appealable: boolean;
  lang: string;
}
