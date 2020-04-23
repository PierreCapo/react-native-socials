export const getTheme = (appearance: "light" | "dark") => {
  if (appearance === "dark") {
    return {
      postBackgroundColor: "black",
      postPressableText: "rgb(59, 148, 217)",
      grey: "rgb(136, 153, 166)",
      mainTextColor: "rgb(245, 248, 250)",
    };
  } else {
    return {
      postBackgroundColor: "white",
      postPressableText: "rgb(27, 149, 224)",
      grey: "rgb(105, 120, 130)",
      mainTextColor: "rgb(28, 32, 34)",
    };
  }
};
