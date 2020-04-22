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

| Light                                                                                                  | Dark                                                                                                        |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram.png" /> | <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram_dark.png" /> |

Props:

- `id`: Instagram post id
- `darkMode`: default to `false`
- `language`: "en" | "de" | "fr" | "es" | "pt" | "it" | "ru"

##### Twitter

```
import {Twitter} from "react-native-socials";
```

Props:

- `id`: Twitter post id
- `language`: "en" | "de" | "fr" | "es" | "pt" | "it" | "ru"
- `consumerKey`: OAuth 1.0 Twitter key that is granted when you [register your app on Twitter Portal](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)
- `consumerSecret`: OAuth 1.0 Twitter secret that is granted when you [register your app on Twitter Portal](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)
- `onHashTagPress?`: Overrides default behavior when pressing an hashtag in a Tweet
- `onUserMentionPress?`: Overrides default behavior when pressing a user mention in a Tweet
- `onLinkPress?`: Overrides default behavior when pressing a user link in a Tweet
- `cornerRadius`: "big | "small". Set the corner radius for embeded contet (Quote / Videos / Photos)
