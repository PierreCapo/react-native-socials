import { TwitterPostApiResponse, UserMention } from "./typings";
import { generateFetchRequestHeaders } from "./generateTwitterHeaders";

export const getPostData = async (
  postId: string,
  consumerKey: string,
  consumerSecret: string
) => {
  const url = `https://api.twitter.com/1.1/statuses/show/${postId}.json`;
  const requestOptions = generateFetchRequestHeaders(
    url,
    consumerKey,
    consumerSecret
  );

  const result = await fetch(url + "?tweet_mode=extended", requestOptions)
    .then((response) => response.json())
    .then((value) => adapter(value))
    .catch((error) => {
      console.log(error);
      return null;
    });
  return result;
};

export const adapter = (data: TwitterPostApiResponse): ITwitterPost => {
  const response = {
    createdAt: data.created_at,
    id: data.id,
    posterImageUrl: data.user.profile_image_url_https.replace("_normal", ""),
    posterDisplayName: data.user.name,
    posterUniqueName: data.user.screen_name,
    isPosterVerified: data.user.verified,
    retweetNumber: data.retweet_count,
    likeNumber: data.favorite_count,
    textContent: data.full_text.replace("&amp;", "&"),
    isQuote: data?.is_quote_status,
    urlList: data?.entities?.urls,
    hashtagList: data?.entities?.hashtags,
    userMentionList: data?.entities?.user_mentions,
    quotedTweet: data?.is_quote_status ? adapter(data?.quoted_status) : null,
    quoteUrlId: data?.quoted_status_id_str,
    media: data.extended_entities?.media?.map((element) => {
      if (element?.type === "video" || element?.type === "animated_gif") {
        return {
          type: "video",
          aspectRatio:
            element?.video_info?.aspect_ratio?.[0] /
            element?.video_info?.aspect_ratio?.[1],
          url: element?.video_info?.variants?.[0]?.url,
          posterUrl: element?.media_url_https,
          twitterShortlink: element?.url,
        };
      }
      if (element?.type === "photo") {
        if (data.extended_entities?.media?.length === 1) {
          return {
            type: element?.type,
            aspectRatio: element.sizes.thumb.w / element.sizes.thumb.h,
            url: element.media_url_https,
            twitterShortlink: element?.url,
          };
        } else {
          return {
            type: element?.type,
            aspectRatio: element.sizes.small.w / element.sizes.small.h,
            url: element.media_url_https,
            twitterShortlink: element?.url,
          };
        }
      }
      return null;
    }),
  };

  response?.media?.forEach((element) => {
    if (element === null) return;
    response.textContent = response.textContent.replace(
      element?.twitterShortlink,
      ""
    );
  });

  // @ts-ignore
  return response;
};

export interface ITwitterPost {
  createdAt: string;
  id: number;
  posterImageUrl: string;
  posterDisplayName: string;
  posterUniqueName: string;
  isPosterVerified: boolean;
  retweetNumber: number;
  likeNumber: number;
  textContent: string;
  isQuote: boolean;
  quotedTweet: any;
  quoteUrlId: string;
  urlList: Array<{
    url: string;
    expanded_url: string;
    display_url: string;
    indices: [number, number];
  }>;
  hashtagList: Array<{
    text: string;
    indices: [number, number];
  }>;
  userMentionList: UserMention[];
  media: Array<{
    type: string;
    aspectRatio: number;
    url: string;
    twitterShortlink: string;
    posterUrl: string;
  }>;
}
