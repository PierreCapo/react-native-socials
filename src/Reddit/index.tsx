import React from "react";
import { View, Text, Image } from "react-native";
import { extractIdFromUrl, getRedditPost, RedditAdaptedData } from "./api";

interface PropsType {
  url: string;
}

export const Reddit = (props: PropsType) => {
  const { url } = props;
  const { t3 } = extractIdFromUrl(url);
  const [data, setData] = React.useState<RedditAdaptedData>(null);
  React.useEffect(() => {
    getRedditPost(t3).then((response) => setData(response));
  }, []);

  return <View>{data?.kind === "t3" ? <MainPost {...data} /> : null}</View>;
};

const MainPost = (props: RedditAdaptedData) => {
  const { title, imageUrl, imageAspectRatio } = props;
  console.log(imageUrl);
  return (
    <View>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>{title}</Text>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "100%", aspectRatio: imageAspectRatio }}
        />
      ) : null}
    </View>
  );
};
