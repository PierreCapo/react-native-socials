# React Native Socials

Javascript library for displaying posts from popular social networks in your react-native app.

## Install

```
yarn add react-native-socials
```

It is also needed to add `react-native-video` in your project because social components usually contains embeded videos. See [react-native-video](https://github.com/react-native-community/react-native-video) library for more information about the installation.

Finally, it is recommended to wrap those components into PureComponent because some of them can be costly to rerender (videos for instance).

### Instagram

| Light                                                                                                  | Dark                                                                                                        |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram.png" /> | <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_instagram_dark.png" /> |

```JSX
import {Instagram} from "react-native-socials";

<Instagram id="B8U12TXAmK-" >
```

Props:

| Name     | Type        | Default                                       | Description                            |
| -------- | ----------- | --------------------------------------------- | -------------------------------------- |
| id       | string      | **Required**                                  | Instagram post id                      |
| darkMode | bool        | false                                         | Toggle dark mode                       |
| language | string enum | "en" - "de" - "fr" - "es" - "pt" - "it" -"ru" | Pick language for metadata of the post |

### Twitter

| Light                                                                                                | Dark                                                                                                      |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_twitter.jpg" /> | <image src="https://github.com/PierreCapo/react-native-socials/raw/master/screenshot_twitter_dark.jpg" /> |

```JSX
import {Twitter} from "react-native-socials";

<Twitter
consumerKey=""
consumerSecret=""
id="1251870993628434433"
>
```

Unlike Instagram, the **Twitter API is not open**. It is needed that you register your app (free version) to the Twitter portal to be able to fetch Twitter posts.

Props:

| Name               | Type                         | Default             | Description                                                                                                                                                                     |
| ------------------ | ---------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                 | string                       | **Required**        | Twitter post id                                                                                                                                                                 |
| consumerKey        | string                       | **Required**        | OAuth 1.0 Twitter key that is granted when you [register your app on Twitter Portal](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)                    |
| consumerSecret     | string                       | **Required**        | OAuth 1.0 Twitter secret that is granted when you [register your app on Twitter Portal](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)                 |
| darkMode           | bool                         | false               | Toggle dark mode                                                                                                                                                                |
| language           | string enum                  | "en"                | Pick language for metadata of the post                                                                                                                                          |
| onHashTagPress     | (hashtag:string) => void     | Redirect to webpage | Overrides default behavior when pressing an hashtag in a Tweet                                                                                                                  |
| onUserMentionPress | (userMention:string) => void | Redirect to webpage | Overrides default behavior when pressing a user mention in a Tweet                                                                                                              |
| onLinkPress        | (link:string) => void        | Redirect to webpage | Overrides default behavior when pressing a link in a Tweet                                                                                                                      |
| cornerRadius       | string enum                  | "small"             | Chose the corner radius of UI elements in a post. Typically a post taking the whole width of the screen should have "big" whereas a post in a card should use the "small" value |
