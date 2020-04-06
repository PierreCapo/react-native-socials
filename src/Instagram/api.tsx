export const getPostInformation = async (
  id: string
): Promise<InstagramPostData> => {
  const getInstagramPostData = await fetch(
    `https://www.instagram.com/p/${id}/?__a=1`
  );
  const instagramPostData: InstagramResponse = await getInstagramPostData.json();
  const {
    graphql: { shortcode_media },
  } = instagramPostData;
  return {
    width: shortcode_media.dimensions.width,
    height: shortcode_media.dimensions.height,
    likeCount: shortcode_media.edge_media_preview_like.count,
    ownerName: shortcode_media.owner.username,
    ownerIsVerified: shortcode_media.owner.is_verified,
    ownerPicture: shortcode_media.owner.profile_pic_url,
    text: shortcode_media.edge_media_to_caption.edges?.[0]?.node?.text || null,
    timestamp: shortcode_media.taken_at_timestamp,
    // @ts-ignore
    content:
      shortcode_media.__typename === "GraphSidecar"
        ? shortcode_media.edge_sidecar_to_children.edges.map((element) => ({
            type: element.node.__typename === "GraphImage" ? "image" : "video",
            pictureUrl: element.node.display_url,
            videoUrl: element.node.video_url || null,
          }))
        : [
            {
              type:
                shortcode_media.__typename === "GraphImage" ? "image" : "video",
              pictureUrl: shortcode_media.display_url,
              videoUrl: shortcode_media.video_url || null,
            },
          ],
  };
};

interface InstagramPhotoResponse {
  graphql: {
    shortcode_media: {
      __typename: "GraphImage";
      dimensions: {
        width: number;
        height: number;
      };
      edge_media_preview_like: {
        count: number;
      };
      owner: {
        username: string;
        is_verified: boolean;
        profile_pic_url: string;
      };
      taken_at_timestamp: number;
      video_url?: void;
      edge_media_to_caption: {
        edges: [
          {
            node: {
              text: string;
            };
          }
        ];
      };
      display_url: string;
    };
  };
}

interface InstagramVideoResponse {
  graphql: {
    shortcode_media: {
      __typename: "GraphVideo";
      dimensions: {
        width: number;
        height: number;
      };
      edge_media_preview_like: {
        count: number;
      };
      owner: {
        username: string;
        is_verified: boolean;
        profile_pic_url: string;
      };
      taken_at_timestamp: number;
      display_url: string;
      video_url: string;
      edge_media_to_caption: {
        edges: [
          {
            node: {
              text: string;
            };
          }
        ];
      };
    };
  };
}

interface InstagramCarouselResponse {
  graphql: {
    shortcode_media: {
      __typename: "GraphSidecar";
      dimensions: {
        width: number;
        height: number;
      };
      edge_media_preview_like: {
        count: number;
      };
      owner: {
        username: string;
        is_verified: boolean;
        profile_pic_url: string;
      };
      taken_at_timestamp: number;
      edge_media_to_caption: {
        edges: [
          {
            node: {
              text: string;
            };
          }
        ];
      };
      edge_sidecar_to_children: {
        edges: Array<{
          node: {
            display_url: string;
            video_url: string | null;
            __typename: "GraphImage" | "GraphVideo";
          };
        }>;
      };
    };
  };
}

export interface InstagramPostData {
  width: number;
  height: number;
  likeCount: number;
  ownerName: string;
  ownerIsVerified: boolean;
  ownerPicture: string;
  text: string | null;
  timestamp: number;
  content: Array<{
    type: "image" | "photo";
    videoUrl: string | null;
    pictureUrl: string;
  }>;
}

type InstagramResponse =
  | InstagramPhotoResponse
  | InstagramVideoResponse
  | InstagramCarouselResponse;
