import React from "react";
import Video from "react-native-video";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
} from "react-native";

interface PropsType {
  source: string;
  aspectRatio: number;
  poster: string;
}

export const TwitterVideo = (props: PropsType) => {
  const { source, aspectRatio, poster } = props;
  const [pauseNumber, setPauseNumber] = React.useState(0);
  const isPaused = pauseNumber % 2 === 0;
  const hasNotUnpausedYet = pauseNumber === 0;
  return (
    <TouchableWithoutFeedback onPress={() => setPauseNumber(pauseNumber + 1)}>
      <View style={{ flex: 1 }}>
        <Image
          // this image is when adding this content to a FlatList. It will allow when pausing and then scrolling and then coming back to not see the white background of the twitter content behind
          style={{
            width: "100%",
            aspectRatio: aspectRatio,
            position: "absolute",
          }}
          source={{ uri: poster }}
        />
        <Video
          source={{ uri: source }}
          style={{
            width: "100%",
            aspectRatio: aspectRatio,
          }}
          paused={isPaused}
          resizeMode={"contain"}
          repeat
        />
        <View style={styles.overlay}>
          <Image
            style={{
              opacity: hasNotUnpausedYet ? 1 : 0,
              width: "100%",
              aspectRatio: aspectRatio,
            }}
            source={{ uri: poster }}
          />
        </View>
        <View style={styles.playContainer}>
          <Image
            style={{
              opacity: isPaused ? 1 : 0,
              width: 50,
              height: 50,
              backgroundColor: "#3AA1E0",
              borderRadius: 25,
              tintColor: "white",
            }}
            source={require("./assets/play.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
  playContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});
