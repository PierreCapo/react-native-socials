import { RedditRootObject } from "./types";

export const extractIdFromUrl = (url: string) => {
  const split = url.split("/");
  const t1_id = split[6];
  return { t3: "t3_" + t1_id };
};

export const getRedditPost = async (infoId: string) => {
  const data = await fetch(`https://api.reddit.com/api/info/?id=${infoId}`)
    .then((response) => response.json())
    .then((response) => adaptRedditResponse(response));

  return data;
};

const adaptRedditResponse = (
  rootResponse: RedditRootObject
): RedditAdaptedData => {
  const kind = rootResponse?.data?.children?.[0]?.kind;
  const imageArray =
    rootResponse?.data?.children?.[0]?.data?.preview?.images || [];
  const lastItemImageArray = [...imageArray].pop();

  console.log(kind);
  if (kind === "t3") {
    return {
      kind,
      subRedditName: rootResponse?.data?.children?.[0]?.data?.subreddit,
      title: rootResponse?.data?.children?.[0]?.data?.title,
      score: rootResponse?.data?.children?.[0]?.data?.score,
      authorName: rootResponse?.data?.children?.[0]?.data?.author,
      commentsNumber: rootResponse?.data?.children?.[0]?.data?.num_comments,
      timestamp: rootResponse?.data?.children?.[0]?.data?.created,
      textContent: rootResponse?.data?.children?.[0]?.data?.selftext,
      imageUrl: lastItemImageArray?.resolutions?.[4]?.url?.replace(
        /&amp;/g,
        "&"
      ),
      imageAspectRatio:
        (lastItemImageArray?.resolutions?.[1]?.width ?? 1) /
        (lastItemImageArray?.resolutions?.[1]?.height ?? 1),
    };
  }
};

export type RedditAdaptedData = IOPPost;

interface IOPPost {
  kind: "t3";
  subRedditName: string;
  title: string;
  score: number;
  authorName: string;
  commentsNumber: number;
  timestamp: number;
  textContent?: string;
  imageUrl?: string;
  imageAspectRatio: number;
}
