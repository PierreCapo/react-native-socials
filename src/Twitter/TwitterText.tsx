import React from "react";
import { Text, StyleSheet, Linking } from "react-native";
import { UserMention, AppearanceTheme } from "./typings";
import { getTheme } from "./theme";

interface PropsType {
  children: string;
  urls: Array<{
    url: string;
    expanded_url: string;
    display_url: string;
    indices: [number, number];
  }>;
  userMentions: UserMention[];
  hashtags: Array<{
    text: string;
    indices: [number, number];
  }>;
  quoteUrlId: string;
  onHashTagPress: (hashtag: string) => void;
  onUserMentionPress: (userMention: string) => void;
  onLinkPress: (link: string) => void;
  styles?: any;
  appearanceTheme: AppearanceTheme;
}

const transformTextToAddColors = (
  textContent: Array<string | JSX.Element>,
  searchFor: string,
  replaceBy: string,
  argumentToLinkTo: string,
  linkTo: (value: string) => any,
  textColor: string
) => {
  if (!searchFor) {
    return textContent;
  }
  let copy: Array<string | JSX.Element | Array<string | JSX.Element>> = [
    ...textContent,
  ];

  textContent.forEach((element, index) => {
    if (typeof element === "string") {
      if (element.includes(searchFor)) {
        const arrayOfTwoString: Array<string | JSX.Element> = element.split(
          searchFor
        );
        arrayOfTwoString.splice(
          1,
          0,
          <Text
            style={{ color: "rgb(27, 149, 224)" }}
            onPress={() => {
              linkTo(argumentToLinkTo);
            }}
          >
            {replaceBy}
          </Text>
        );
        copy[index] = [...arrayOfTwoString];
      }
    }
  });
  return [].concat.apply([], copy);
};

export const TwitterText = (props: PropsType) => {
  const {
    styles,
    children,
    urls,
    hashtags,
    userMentions,
    quoteUrlId,
    onHashTagPress,
    onLinkPress,
    onUserMentionPress,
    appearanceTheme,
  } = props;
  let transformedText = [children];
  const colors = getTheme(appearanceTheme);
  urls.forEach((url) => {
    if (url.expanded_url.includes(quoteUrlId)) {
      transformedText = transformTextToAddColors(
        transformedText,
        url.url,
        "",
        url.expanded_url,
        onLinkPress,
        colors.postPressableText
      );
    }
    transformedText = transformTextToAddColors(
      transformedText,
      url.url,
      url.display_url,
      url.expanded_url,
      onLinkPress,
      colors.postPressableText
    );
  });
  hashtags.forEach((hashtag) => {
    transformedText = transformTextToAddColors(
      transformedText,
      "#" + hashtag.text,
      "#" + hashtag.text,
      hashtag.text,
      onHashTagPress,
      colors.postPressableText
    );
  });
  userMentions.forEach((userMention) => {
    transformedText = transformTextToAddColors(
      transformedText,
      "@" + userMention.screen_name,
      "@" + userMention.screen_name,
      userMention.screen_name,
      onUserMentionPress,
      colors.postPressableText
    );
  });
  return (
    <Text style={styles}>
      {transformedText.map((element, index) => (
        <Text key={index}>{element}</Text>
      ))}
    </Text>
  );
};

TwitterText.defaultProps = {
  onHashTagPress: (hashtag: string) =>
    Linking.openURL(
      `https://twitter.com/search?q=%23${hashtag}&src=hashtag_click`
    ),
  onLinkPress: (link: string) => Linking.openURL(link),
  onUserMentionPress: (userMention: string) =>
    Linking.openURL(`https://twitter.com/${userMention}`),
};
