import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { openGraphTool } from "./OpenGraphParser";
import { getTheme } from "./theme";
import { AppearanceTheme } from "./typings";

interface PropsType {
  url: string;
  onLinkPress: (value: string) => any;
  appearanceTheme: AppearanceTheme;
}

const getDomain = (url: string) => {
  const match = url.match(
    /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
  );
  return match?.[1] || match?.[0];
};

export const LinkPreview = (props: PropsType) => {
  const { url, onLinkPress, appearanceTheme } = props;
  const [data, setData] = React.useState<{
    url: string;
    title?: string;
    image?: string;
    description?: string;
  } | null>(null);

  const styles = getTheme(appearanceTheme);
  React.useEffect(() => {
    openGraphTool
      .extractMeta(url)
      // @ts-ignore
      .then((response) => setData(response[0]));
  }, [setData]);
  if (!data) {
    return null;
  }
  const domain = getDomain(data.url);
  return (
    <TouchableOpacity
      onPress={() => onLinkPress(data.url)}
      activeOpacity={0.8}
      disabled={!onLinkPress}
    >
      <View>
        {data?.image ? (
          <Image
            source={{ uri: data?.image }}
            style={{ width: "100%", aspectRatio: 600 / 314 }}
            resizeMode={"cover"}
          />
        ) : null}
        <View style={{ paddingHorizontal: 12, paddingVertical: 10 }}>
          {data?.title ? (
            <Text
              numberOfLines={1}
              style={{
                color: styles.mainTextColor,
                fontSize: 14,
                fontWeight: "700",
                marginBottom: 2,
              }}
            >
              {data.title}
            </Text>
          ) : null}
          {data?.description ? (
            <Text
              numberOfLines={2}
              style={{
                color: styles.mainTextColor,
                fontSize: 14,
                lineHeight: 18,
              }}
            >
              {data.description.replace("\n", "")}
            </Text>
          ) : null}
          {domain ? (
            <Text
              numberOfLines={1}
              style={{ color: styles.grey, fontSize: 14 }}
            >
              {domain}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

LinkPreview.defaultProps = {
  onLinkPress: (url: string) => Linking.openURL(url),
};
