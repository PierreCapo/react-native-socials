import { TwitterPostApiResponse } from "./typings";
export const sample: TwitterPostApiResponse = {
  created_at: "Wed Apr 15 10:31:00 +0000 2020",
  id: 1250371035213389825,
  id_str: "1250371035213389825",
  text:
    "🇹🇷 Describe Volkan Demirel with an 𝗘𝗠𝗢𝗝𝗜!\n\n⏪ Throwback to @MilliTakimlar at EURO 2008 https://t.co/EoayMKW2YG",
  truncated: false,
  entities: {
    hashtags: [],
    symbols: [],
    user_mentions: [
      {
        screen_name: "MilliTakimlar",
        name: "Milli Takımlar",
        id: 2327308063,
        id_str: "2327308063",
        indices: [58, 72],
      },
    ],
    urls: [],
    media: [
      {
        id: 1250067304861360128,
        id_str: "1250067304861360128",
        indices: [86, 109],
        media_url: "http://pbs.twimg.com/media/EVkhwuIXsAISgR6.jpg",
        media_url_https: "https://pbs.twimg.com/media/EVkhwuIXsAISgR6.jpg",
        url: "https://t.co/EoayMKW2YG",
        display_url: "pic.twitter.com/EoayMKW2YG",
        expanded_url:
          "https://twitter.com/EURO2020/status/1250371035213389825/video/1",
        type: "photo",
        sizes: {
          thumb: {
            w: 150,
            h: 150,
            resize: "crop",
          },
          small: {
            w: 680,
            h: 680,
            resize: "fit",
          },
          medium: {
            w: 720,
            h: 720,
            resize: "fit",
          },
          large: {
            w: 720,
            h: 720,
            resize: "fit",
          },
        },
      },
    ],
  },
  extended_entities: {
    media: [
      {
        id: 1250067304861360128,
        id_str: "1250067304861360128",
        indices: [86, 109],
        media_url: "http://pbs.twimg.com/media/EVkhwuIXsAISgR6.jpg",
        media_url_https: "https://pbs.twimg.com/media/EVkhwuIXsAISgR6.jpg",
        url: "https://t.co/EoayMKW2YG",
        display_url: "pic.twitter.com/EoayMKW2YG",
        expanded_url:
          "https://twitter.com/EURO2020/status/1250371035213389825/video/1",
        type: "video",
        sizes: {
          thumb: {
            w: 150,
            h: 150,
            resize: "crop",
          },
          small: {
            w: 680,
            h: 680,
            resize: "fit",
          },
          medium: {
            w: 720,
            h: 720,
            resize: "fit",
          },
          large: {
            w: 720,
            h: 720,
            resize: "fit",
          },
        },
        video_info: {
          aspect_ratio: [1, 1],
          duration_millis: 10480,
          variants: [
            {
              bitrate: 432000,
              content_type: "video/mp4",
              url:
                "https://video.twimg.com/amplify_video/1250067304861360128/vid/320x320/awGuLSnXkbJX_CEy.mp4?tag=13",
            },
            {
              content_type: "application/x-mpegURL",
              url:
                "https://video.twimg.com/amplify_video/1250067304861360128/pl/p4rd96XPmZAaj6tO.m3u8?tag=13",
            },
            {
              bitrate: 1280000,
              content_type: "video/mp4",
              url:
                "https://video.twimg.com/amplify_video/1250067304861360128/vid/720x720/tUaLVgqyjqR9pBSZ.mp4?tag=13",
            },
            {
              bitrate: 832000,
              content_type: "video/mp4",
              url:
                "https://video.twimg.com/amplify_video/1250067304861360128/vid/480x480/ysOsmwyZ4NDDruxT.mp4?tag=13",
            },
          ],
        },
        additional_media_info: {
          title: "",
          description: "",
          embeddable: true,
          monetizable: false,
        },
      },
    ],
  },
  source:
    '<a href="https://studio.twitter.com" rel="nofollow">Twitter Media Studio</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 1469402426,
    id_str: "1469402426",
    name: "UEFA EURO 2020",
    screen_name: "EURO2020",
    location: "",
    description:
      "The official home of UEFA national team football on Twitter \n⚽️ #EURO2020 #NationsLeague #EuropeanQualifiers",
    url: "https://t.co/N2jxtoDPei",
    entities: {
      url: {
        urls: [
          {
            url: "https://t.co/N2jxtoDPei",
            expanded_url: "http://euro2020.com",
            display_url: "euro2020.com",
            indices: [0, 23],
          },
        ],
      },
      description: {
        urls: [],
      },
    },
    protected: false,
    followers_count: 1668605,
    friends_count: 490,
    listed_count: 4091,
    created_at: "Thu May 30 10:08:05 +0000 2013",
    favourites_count: 751,
    utc_offset: null,
    time_zone: null,
    geo_enabled: true,
    verified: true,
    statuses_count: 22900,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: "C0DEED",
    profile_background_image_url:
      "http://abs.twimg.com/images/themes/theme1/bg.png",
    profile_background_image_url_https:
      "https://abs.twimg.com/images/themes/theme1/bg.png",
    profile_background_tile: false,
    profile_image_url:
      "http://pbs.twimg.com/profile_images/1235523568605310978/Ba00G6Zm_normal.jpg",
    profile_image_url_https:
      "https://pbs.twimg.com/profile_images/1235523568605310978/Ba00G6Zm_normal.jpg",
    profile_banner_url:
      "https://pbs.twimg.com/profile_banners/1469402426/1583234654",
    profile_link_color: "1B95E0",
    profile_sidebar_border_color: "FFFFFF",
    profile_sidebar_fill_color: "DDEEF6",
    profile_text_color: "333333",
    profile_use_background_image: true,
    has_extended_profile: false,
    default_profile: false,
    default_profile_image: false,
    following: null,
    follow_request_sent: null,
    notifications: null,
    translator_type: "none",
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 234,
  favorite_count: 3031,
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  possibly_sensitive_appealable: false,
  lang: "en",
};
