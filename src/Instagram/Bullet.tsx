import React from "react";
import { View, StyleSheet } from "react-native";

interface PropsType {
  numberOfBullets: number;
  itemIndexCurrentlyFocused: number;
}

export const Bullet = (props: PropsType) => {
  const { numberOfBullets, itemIndexCurrentlyFocused } = props;
  const bulletsArray = Array(numberOfBullets).fill(0);
  return (
    <View style={styles.container}>
      {bulletsArray.map((_, index) => {
        if (index === itemIndexCurrentlyFocused) {
          return <View style={styles.bulletFocused} key={index} />;
        } else {
          return <View style={styles.bullet} key={index} />;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
    backgroundColor: "#A8A8A8",
  },
  bulletFocused: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
    backgroundColor: "#0095F6",
  },
});
