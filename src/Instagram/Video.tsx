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
  hasFocus: boolean;
}

export const InstagramVideo = (props: PropsType) => {
  const { source, aspectRatio, poster, hasFocus } = props;
  const [pauseNumber, setPauseNumber] = React.useState(0);
  const isPaused = pauseNumber % 2 === 0;
  const hasNotUnpausedYet = pauseNumber === 0;
  return (
    <TouchableWithoutFeedback onPress={() => setPauseNumber(pauseNumber + 1)}>
      <View style={{ flex: 1 }}>
        <Video
          source={{ uri: source }}
          style={{
            flex: 1,
            aspectRatio,
          }}
          paused={isPaused || !hasFocus}
          resizeMode={"contain"}
          repeat
        />
        <View style={styles.overlay}>
          <Image
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity: hasNotUnpausedYet ? 1 : 0,
            }}
            source={{ uri: poster }}
          />
        </View>
        <View style={styles.playContainer}>
          <Image
            style={{
              opacity: isPaused ? 1 : 0,
              width: 50,
            }}
            source={require("./assets/play.png")}
            resizeMode="contain"
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
