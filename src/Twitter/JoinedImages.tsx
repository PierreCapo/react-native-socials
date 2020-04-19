import React from "react";
import { View, Image } from "react-native";

interface PropsType {
  medias: Array<{ url: string; aspectRatio: number }>;
}

export const ImageGallery = (props: PropsType) => {
  const { medias } = props;
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: medias[0].url }}
          style={{
            width: "100%",
            aspectRatio: medias[0].aspectRatio,
          }}
          resizeMode={"cover"}
        />
        {medias[3] ? (
          <>
            <View style={{ height: 1 }} />
            <Image
              source={{ uri: medias[3].url }}
              style={{
                width: "100%",
                aspectRatio: medias[3].aspectRatio,
              }}
              resizeMode={"cover"}
            />
          </>
        ) : null}
      </View>
      {medias[1] ? (
        <>
          <View style={{ width: 1 }} />
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: medias[1].url }}
              style={{
                width: "100%",
                aspectRatio: medias[1].aspectRatio,
              }}
              resizeMode={"cover"}
            />
            {medias[2] ? (
              <>
                <View style={{ height: 1 }} />
                <Image
                  source={{ uri: medias[2].url }}
                  style={{
                    width: "100%",
                    aspectRatio: medias[2].aspectRatio,
                  }}
                  resizeMode={"cover"}
                />
              </>
            ) : null}
          </View>
        </>
      ) : null}
    </View>
  );
};
