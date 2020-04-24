import React from "react";
import {
  View,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;

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
  const [modalState, setModalState] = React.useState({
    isModalVisible: false,
    itemPressed: 0,
  });
  const aspectRatios = medias.map((element) => element.aspectRatio);
  const scrollViewRef = React.useRef(null);
  const isModalVisible = modalState.isModalVisible;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          aspectRatio: getContainerAspectRatio(aspectRatios),
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() =>
              setModalState({ isModalVisible: true, itemPressed: 0 })
            }
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: medias[0].url }}
              style={{
                flex: 1,
                width: "100%",
              }}
              resizeMode={"cover"}
            />
          </TouchableOpacity>
          {medias[3] ? (
            <>
              <View style={{ height: 1 }} />
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  setModalState({ isModalVisible: true, itemPressed: 3 })
                }
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: medias[3].url }}
                  style={{
                    flex: 1,
                    width: "100%",
                  }}
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
            </>
          ) : null}
        </View>
        {medias[1] ? (
          <>
            <View style={{ width: 1 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  setModalState({ isModalVisible: true, itemPressed: 3 })
                }
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: medias[1].url }}
                  style={{
                    flex: 1,
                    width: "100%",
                  }}
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
              {medias[2] ? (
                <>
                  <View style={{ height: 1 }} />
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      setModalState({ isModalVisible: true, itemPressed: 3 })
                    }
                    activeOpacity={0.8}
                  >
                    <Image
                      source={{ uri: medias[2].url }}
                      style={{
                        flex: 1,
                        width: "100%",
                      }}
                      resizeMode={"cover"}
                    />
                  </TouchableOpacity>
                </>
              ) : null}
            </View>
          </>
        ) : null}
      </View>
      <Modal
        animationType={"slide"}
        visible={isModalVisible}
        // no pagesheet type cause of https://github.com/facebook/react-native/issues/26892
      >
        <View
          style={{
            backgroundColor: "black",
            flex: 1,
          }}
        >
          <SafeAreaView />
          <View style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={{
                width: 100 * medias.length + "%",
                alignItems: "center",
              }}
              decelerationRate="fast"
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
              // has been fixed for Android in https://github.com/facebook/react-native/commit/ed29ba13f97f240c91fdf6c0ef3fb601046697b9
              contentOffset={{ y: 0, x: WINDOW_WIDTH * modalState.itemPressed }}
            >
              {medias.map((element, index) => (
                <Image
                  key={index}
                  source={{ uri: element.url }}
                  style={{
                    flex: 1,
                    aspectRatio: element.aspectRatio,
                  }}
                />
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() =>
                setModalState({
                  isModalVisible: false,
                  itemPressed: modalState.itemPressed,
                })
              }
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
              activeOpacity={0.8}
            >
              <Image
                source={require("./assets/close.png")}
                style={{ tintColor: "#EEEEEE", height: 40, width: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
