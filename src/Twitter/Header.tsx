import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

interface PropsType {
  posterImageUrl: string;
  posterDisplayName: string;
  posterUniqueName: string;
  isPosterVerified: boolean;
}

export const Header = (props: PropsType) => {
  const {
    posterImageUrl,
    posterDisplayName,
    posterUniqueName,
    isPosterVerified,
  } = props;
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
}

export const HeaderQuote = (props: HeaderQuotePropsType) => {
  const {
    isPosterVerified,
    posterUniqueName,
    posterImageUrl,
    posterDisplayName,
  } = props;
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

const styles = StyleSheet.create({
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
    color: "rgb(28, 32, 34)",
    fontSize: 16,
    fontWeight: "700",
  },
  quotedDisplayNameText: {
    color: "rgb(28, 32, 34)",
    fontSize: 14,
    fontWeight: "700",
  },
  uniqueNameText: {
    color: "rgb(105, 120, 130)",
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
    color: "rgb(28, 32, 34)",
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
