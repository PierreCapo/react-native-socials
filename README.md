# React Native Socials

Javascript library for displaying posts from popular social networks in your react-native app.

### Install

```
yarn add react-native-socials
```

It is also needed to add `react-native-video` in your project because social components usually contains embeded videos. See [react-native-video](https://github.com/react-native-community/react-native-video) library for more information about the installation

### API

##### Instagram

```
import {Instagram} from "react-native-socials";
```

| Light | Dark |
| --- | --- |
|<image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram.png" />|<image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram_dark.png" />|

Props:

- `id`: Instagram post id
- `darkMode`: default to `false`
- `language`: "en" | "de" | "fr" | "es" | "pt" | "it" | "ru"

_WIP_
