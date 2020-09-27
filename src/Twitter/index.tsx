import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { getPostData, ITwitterPost, adapter } from "./api";
import { parse, format } from "date-fns";
import { Header, HeaderQuote } from "./Header";
import { formatLikeNumber, getFormattedTimeByLanguage } from "./utils";
import { ImageGallery } from "./ImageGallery";
import { TwitterText } from "./TwitterText";
import { TwitterVideo } from "./Video";
import { LinkPreview } from "./LinkPreview";
import { AppearanceTheme } from "./typings";
import { getTheme } from "./theme";

interface PropsType {
  id: string;
  consumerKey: string;
  consumerSecret: string;
  language?: "en" | "fr" | "es" | "pt" | "it" | "de" | "ru";
  onHashTagPress?: (hashtag: string) => void;
  onUserMentionPress?: (userMention: string) => void;
  onLinkPress?: (link: string) => void;
  cornerRadius?: "small" | "big";
  darkMode?: boolean;
  containerBorderRadius: number;
  onTweetPress: (tweetId: string) => any;
  useCustomTweetExtendedData?: any;
}

export const Twitter = (props: PropsType) => {
  const {
    language,
    onHashTagPress,
    onLinkPress,
    onUserMentionPress,
    consumerKey,
    consumerSecret,
    cornerRadius,
    darkMode,
    containerBorderRadius,
    onTweetPress,
    useCustomTweetExtendedData,
  } = props;
  var id = props.id;
  const appearance = darkMode ? "dark" : "light";
  const [data, setData] = React.useState<ITwitterPost | null>(null);
  React.useEffect(() => {
    if (!useCustomTweetExtendedData) {
      getPostData(id, consumerKey, consumerSecret).then((response) => {
        setData(response);
      });
    } else {
      setData(adapter(useCustomTweetExtendedData));
    }
  }, [setData]);
  if (!data) {
    return null;
  }
  if (useCustomTweetExtendedData) {
    id = useCustomTweetExtendedData.id_str;
  }
  const styles = evaluateTheme(appearance);

  return (
    <TouchableWithoutFeedback onPress={() => onTweetPress(id)}>
      <View style={styles.container(containerBorderRadius)}>
        {data ? (
          <>
            <Header
              posterImageUrl={data.posterImageUrl}
              posterDisplayName={data.posterDisplayName}
              posterUniqueName={data.posterUniqueName}
              isPosterVerified={data.isPosterVerified}
              appearanceTheme={appearance}
            />
            <View style={styles.headerSeparator} />
            <View>
              <TwitterText
                styles={styles.mainContentText}
                urls={data.urlList}
                hashtags={data.hashtagList}
                userMentions={data.userMentionList}
                quoteUrlId={data.quoteUrlId}
                appearanceTheme={appearance}
              >
                {data.textContent}
              </TwitterText>
            </View>
            {data?.media?.[0]?.type === "video" ? (
              <View style={styles.embedContainer(cornerRadius)}>
                <TwitterVideo
                  source={data.media[0].url}
                  aspectRatio={data.media[0].aspectRatio}
                  poster={data.media[0].posterUrl}
                />
              </View>
            ) : data?.media?.[0]?.type === "photo" ? (
              <View style={styles.embedContainer(cornerRadius)}>
                <ImageGallery medias={data.media} />
              </View>
            ) : data?.urlList?.[0] && !data?.isQuote ? (
              <View style={styles.embedContainer(cornerRadius)}>
                <LinkPreview
                  url={data?.urlList?.[0]?.expanded_url}
                  onLinkPress={onLinkPress}
                  appearanceTheme={appearance}
                />
              </View>
            ) : null}
            {data?.isQuote ? (
              <View style={styles.embedContainer(cornerRadius)}>
                <View style={{ margin: 10 }}>
                  <HeaderQuote
                    isPosterVerified={data.quotedTweet.isPosterVerified}
                    posterUniqueName={data.quotedTweet.posterUniqueName}
                    posterImageUrl={data.quotedTweet.posterImageUrl}
                    posterDisplayName={data.quotedTweet.posterDisplayName}
                    appearanceTheme={appearance}
                  />
                  <TwitterText
                    urls={data.quotedTweet.urlList}
                    hashtags={data.quotedTweet.hashtagList}
                    userMentions={data.quotedTweet.userMentionList}
                    quoteUrlId={data.quotedTweet.quoteUrlId}
                    {...{ onHashTagPress, onLinkPress, onUserMentionPress }}
                    styles={styles.quotedContentText}
                    appearanceTheme={appearance}
                  >
                    {data.quotedTweet.textContent}
                  </TwitterText>
                </View>
                {data?.quotedTweet?.media?.[0]?.type === "video" ? (
                  <TwitterVideo
                    source={data.quotedTweet.media[0].url}
                    aspectRatio={data.quotedTweet.media[0].aspectRatio}
                    poster={data.quotedTweet.media[0].posterUrl}
                  />
                ) : data?.quotedTweet?.media?.[0]?.type === "photo" ? (
                  <ImageGallery medias={data?.quotedTweet?.media} />
                ) : null}
              </View>
            ) : null}
            <View style={styles.metadataRowContainer}>
              <Image
                source={require("./assets/heart.png")}
                style={styles.heart}
              />
              <Text style={styles.metadataRowText}>
                {formatLikeNumber(data?.likeNumber) +
                  "    " +
                  format(
                    parse(
                      data?.createdAt,
                      "EEE MMM dd HH:mm:ss xx yyyy",
                      new Date()
                    ),
                    getFormattedTimeByLanguage(language).format,
                    { locale: getFormattedTimeByLanguage(language).locale }
                  )}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

Twitter.defaultProps = {
  cornerRadius: "small",
  borderRadius: 0,
  onTweetPress: (tweetId: string) =>
    Linking.openURL("https://twitter.com/post/status/" + tweetId),
};

const evaluateTheme = (appearance: AppearanceTheme) => {
  const colors = getTheme(appearance);
  return StyleSheet.create({
    // @ts-ignore
    container: (containerBorderRadius: number) => ({
      width: "100%",
      backgroundColor: colors.postBackgroundColor,
      paddingHorizontal: 20,
      borderRadius: containerBorderRadius,
    }),
    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    profilePicture: {
      width: 36,
      height: 36,
      borderRadius: 18,
    },
    profileBanner: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    displayNameText: {
      color: colors.mainTextColor,
      fontSize: 16,
      fontWeight: "700",
    },
    uniqueNameText: {
      color: colors.grey,
      fontSize: 14,
      fontWeight: "400",
    },
    nameContainer: {
      marginLeft: 10,
      justifyContent: "space-between",
    },
    headerSeparator: {
      height: 12,
    },
    mainContentText: {
      color: colors.mainTextColor,
      fontSize: 16,
      lineHeight: 22,
    },
    quotedContentText: {
      color: colors.mainTextColor,
      fontSize: 14,
      lineHeight: 19,
    },
    metadataRowText: {
      color: colors.grey,
      fontSize: 14,
    },
    metadataRowContainer: {
      marginVertical: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    heart: {
      tintColor: colors.grey,
      width: 18,
      height: 18,
      marginRight: 4,
    },
    // @ts-ignore wrong react-native style
    embedContainer: (cornerRadius: "big" | "small") => ({
      borderColor: "rgb(204, 214, 221)",
      borderWidth: 0.7,
      borderRadius: cornerRadius === "big" ? 12 : 4,
      marginTop: 10,
      overflow: "hidden",
    }),
  });
};
