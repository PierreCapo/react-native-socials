import React from "react";
import { View, Image } from "react-native";

interface PropsType {
  medias: Array<{ url: string; aspectRatio: number }>;
}

const getContainerAspectRatio = (aspectRatios: number[]) => {
  const reverseAspectRatios = aspectRatios.map(
    (aspectRatio) => 1 / aspectRatio
  );
  if (aspectRatios.length === 1) {
    return aspectRatios[0];
  }
  if (aspectRatios.length === 2) {
    return 1 / Math.min(reverseAspectRatios[0], reverseAspectRatios[1]);
  }
  if (aspectRatios.length === 3) {
    const cumulatedAspectRatioRightPart =
      reverseAspectRatios[1] + reverseAspectRatios[2];
    return 1 / Math.min(reverseAspectRatios[0], cumulatedAspectRatioRightPart);
  }
  if (aspectRatios.length === 4) {
    const cumulatedAspectRatioRightPart =
      reverseAspectRatios[1] + reverseAspectRatios[2];
    const cumulatedAspectRatioLeftPart =
      reverseAspectRatios[0] + reverseAspectRatios[3];
    return (
      (1 /
        Math.min(cumulatedAspectRatioLeftPart, cumulatedAspectRatioRightPart)) *
      2
    );
  }
  return aspectRatios[0];
};

export const ImageGallery = (props: PropsType) => {
  const { medias } = props;
  const aspectRatios = medias.map((element) => element.aspectRatio);
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        aspectRatio: getContainerAspectRatio(aspectRatios),
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: medias[0].url }}
          style={{
            flex: 1,
            width: "100%",
          }}
          resizeMode={"cover"}
        />
        {medias[3] ? (
          <>
            <View style={{ height: 1 }} />
            <Image
              source={{ uri: medias[3].url }}
              style={{
                flex: 1,
                width: "100%",
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
                flex: 1,
                width: "100%",
              }}
              resizeMode={"cover"}
            />
            {medias[2] ? (
              <>
                <View style={{ height: 1 }} />
                <Image
                  source={{ uri: medias[2].url }}
                  style={{
                    flex: 1,
                    width: "100%",
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
