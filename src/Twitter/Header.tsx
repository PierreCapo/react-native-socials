import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AppearanceTheme } from "./typings";
import { getTheme } from "./theme";

interface PropsType {
  posterImageUrl: string;
  posterDisplayName: string;
  posterUniqueName: string;
  isPosterVerified: boolean;
  appearanceTheme: AppearanceTheme;
}

export const Header = (props: PropsType) => {
  const {
    posterImageUrl,
    posterDisplayName,
    posterUniqueName,
    isPosterVerified,
    appearanceTheme,
  } = props;
  const styles = evaluateTheme(appearanceTheme);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: posterImageUrl,
        }}
        style={[styles.profilePicture, styles.profilePictureBig]}
      />
      <View style={styles.firstLine}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={styles.displayNameText}>{posterDisplayName}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {isPosterVerified ? (
              <Image
                source={require("./assets/verified.png")}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: "#2EA1F2",
                  marginLeft: 2,
                }}
              />
            ) : (
              <View />
            )}
            <Image
              source={require("./assets/logo.png")}
              style={{
                height: 18,
                width: 18,
                tintColor: "#2EA1F2",
              }}
            />
          </View>
        </View>
        <Text style={styles.uniqueNameText}>@{posterUniqueName}</Text>
      </View>
    </View>
  );
};

interface HeaderQuotePropsType {
  isPosterVerified: boolean;
  posterUniqueName: string;
  posterImageUrl: string;
  posterDisplayName: string;
  appearanceTheme: AppearanceTheme;
}

export const HeaderQuote = (props: HeaderQuotePropsType) => {
  const {
    isPosterVerified,
    posterUniqueName,
    posterImageUrl,
    posterDisplayName,
    appearanceTheme,
  } = props;
  const styles = evaluateTheme(appearanceTheme);
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
    >
      <Image
        source={{
          uri: posterImageUrl,
        }}
        style={[styles.profilePicture, styles.profilePictureSmall]}
      />
      <Text style={styles.quotedDisplayNameText}>{posterDisplayName}</Text>
      <View style={{ marginHorizontal: 2 }} />
      {isPosterVerified ? (
        <Image
          source={require("./assets/verified.png")}
          style={{
            width: 16,
            height: 16,
            tintColor: "#2EA1F2",
          }}
        />
      ) : null}
      <View style={{ marginHorizontal: 2 }} />
      <Text style={styles.uniqueNameText}>@{posterUniqueName}</Text>
      <Text></Text>
    </View>
  );
};
const evaluateTheme = (appearance: "dark" | "light") => {
  const colors = getTheme(appearance);
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    },
    profilePicture: {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.08)",
    },
    profileBanner: {
      flexDirection: "row",
    },
    displayNameText: {
      color: colors.mainTextColor,
      fontSize: 16,
      fontWeight: "700",
    },
    quotedDisplayNameText: {
      color: colors.mainTextColor,
      fontSize: 14,
      fontWeight: "700",
    },
    uniqueNameText: {
      color: colors.grey,
      fontSize: 14,
      fontWeight: "400",
    },
    firstLine: {
      marginLeft: 10,
      justifyContent: "space-between",
      flex: 1,
    },
    headerSeparator: {
      height: 12,
    },
    mainContentText: {
      color: colors.mainTextColor,
      fontSize: 16,
      fontWeight: "500",
    },
    profilePictureBig: {
      width: 42,
      height: 42,
      borderRadius: 21,
    },
    profilePictureSmall: {
      width: 18,
      height: 18,
      borderRadius: 8,
      marginRight: 5,
    },
  });
};
