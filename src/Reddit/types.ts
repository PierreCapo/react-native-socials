export interface MediaEmbed {}

export interface SecureMediaEmbed {}

export interface Gildings {
  gid_1: number;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Variants {}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  variants: Variants;
  id: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export interface AllAwarding {
  giver_coin_reward?: any;
  subreddit_id?: any;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate?: any;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  icon_height: number;
  resized_icons: ResizedIcon[];
  icon_width: number;
  start_date?: any;
  is_enabled: boolean;
  description: string;
  end_date?: any;
  subreddit_coin_reward: number;
  count: number;
  name: string;
  icon_format?: any;
  award_sub_type: string;
  penny_price?: any;
  award_type: string;
}

export interface Data2 {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class?: any;
  downs: number;
  thumbnail_height: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color?: any;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: SecureMediaEmbed;
  link_flair_text?: any;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class?: any;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category?: any;
  banned_by?: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html?: any;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by?: any;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  discussion_type?: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color?: any;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: any;
  is_video: boolean;
}

export interface Child {
  kind: string;
  data: Data2;
}

export interface Data {
  modhash: string;
  dist: number;
  children: Child[];
  after?: any;
  before?: any;
}

export interface RedditRootObject {
  kind: string;
  data: Data;
}
