/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
// @ts-ignore
import {Instagram, Twitter} from 'react-native-socials';

// pass your custom twitter credentials in this file for developement purpose
import {credentials} from './config';

const AuthTwitter = (props: any) => {
  return (
    <Twitter
      {...props}
      /* not needed because useCustomTweetExtendedData is passed 
        consumerKey={credentials.consumerKey}
      consumerSecret={credentials.consumerSecret}
      */

      useCustomTweetExtendedData={{
        created_at: 'Tue May 26 03:51:24 +0000 2020',
        id: 1265128375707983872,
        id_str: '1265128375707983872',
        full_text:
          'underappreciated fact about Gatsby - React and #JavaScript library authors are giving their projects a boost by making it available as Gatsby plugins\n\nLike website owners optimizing sites for Google search\n\n🔥 Gatsby is becoming a distribution channel for the front-end ecosystem https://t.co/5DFggGfmI3',
        truncated: false,
        display_text_range: [0, 278],
        entities: {
          hashtags: [
            {
              text: 'JavaScript',
              indices: [47, 58],
            },
          ],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/5DFggGfmI3',
              expanded_url:
                'https://twitter.com/kylemathews/status/1264990757145829379',
              display_url: 'twitter.com/kylemathews/st…',
              indices: [279, 302],
            },
          ],
        },
        source:
          '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 803599579090448388,
          id_str: '803599579090448388',
          name: 'Hashim of Swords ⚔️',
          screen_name: 'hashim_warren',
          location: 'Greensboro, NC',
          description:
            '@GatsbyJS Product Marketer\n \nSubscribe to ⚒ https://t.co/6wFSeGwvVU\n\n#JAMstack #LowCode #ConfigMag',
          url: 'https://t.co/RpbefIGgw6',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/RpbefIGgw6',
                  expanded_url: 'https://www.configmag.com/',
                  display_url: 'configmag.com',
                  indices: [0, 23],
                },
              ],
            },
            description: {
              urls: [
                {
                  url: 'https://t.co/6wFSeGwvVU',
                  expanded_url: 'http://configmag.com',
                  display_url: 'configmag.com',
                  indices: [44, 67],
                },
              ],
            },
          },
          protected: false,
          followers_count: 2434,
          friends_count: 1798,
          listed_count: 54,
          created_at: 'Tue Nov 29 14:00:44 +0000 2016',
          favourites_count: 8426,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: false,
          statuses_count: 8516,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'F5F8FA',
          profile_background_image_url: null,
          profile_background_image_url_https: null,
          profile_background_tile: false,
          profile_image_url:
            'http://pbs.twimg.com/profile_images/1290714682857345025/2EZu5asr_normal.jpg',
          profile_image_url_https:
            'https://pbs.twimg.com/profile_images/1290714682857345025/2EZu5asr_normal.jpg',
          profile_banner_url:
            'https://pbs.twimg.com/profile_banners/803599579090448388/1541399352',
          profile_link_color: '1DA1F2',
          profile_sidebar_border_color: 'C0DEED',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: true,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: true,
        quoted_status_id: 1264990757145829379,
        quoted_status_id_str: '1264990757145829379',
        quoted_status_permalink: {
          url: 'https://t.co/5DFggGfmI3',
          expanded:
            'https://twitter.com/kylemathews/status/1264990757145829379',
          display: 'twitter.com/kylemathews/st…',
        },
        quoted_status: {
          created_at: 'Mon May 25 18:44:33 +0000 2020',
          id: 1264990757145829379,
          id_str: '1264990757145829379',
          full_text:
            "Two fun recent @gatsbyjs milestones\n\n- 200k GitHub repos using Gatsby\n- 2000 plugins\n\nAnd it still feels like we're just getting started! https://t.co/yV84nc51qS",
          truncated: false,
          display_text_range: [0, 137],
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'GatsbyJS',
                name: 'Gatsby',
                id: 3227338044,
                id_str: '3227338044',
                indices: [15, 24],
              },
            ],
            urls: [],
            media: [
              {
                id: 1264990744365772800,
                id_str: '1264990744365772800',
                indices: [138, 161],
                media_url: 'http://pbs.twimg.com/media/EY4mYToUMAA8Ffw.png',
                media_url_https:
                  'https://pbs.twimg.com/media/EY4mYToUMAA8Ffw.png',
                url: 'https://t.co/yV84nc51qS',
                display_url: 'pic.twitter.com/yV84nc51qS',
                expanded_url:
                  'https://twitter.com/kylemathews/status/1264990757145829379/photo/1',
                type: 'photo',
                sizes: {
                  large: {
                    w: 810,
                    h: 866,
                    resize: 'fit',
                  },
                  medium: {
                    w: 810,
                    h: 866,
                    resize: 'fit',
                  },
                  thumb: {
                    w: 150,
                    h: 150,
                    resize: 'crop',
                  },
                  small: {
                    w: 636,
                    h: 680,
                    resize: 'fit',
                  },
                },
              },
            ],
          },
          extended_entities: {
            media: [
              {
                id: 1264990744365772800,
                id_str: '1264990744365772800',
                indices: [138, 161],
                media_url: 'http://pbs.twimg.com/media/EY4mYToUMAA8Ffw.png',
                media_url_https:
                  'https://pbs.twimg.com/media/EY4mYToUMAA8Ffw.png',
                url: 'https://t.co/yV84nc51qS',
                display_url: 'pic.twitter.com/yV84nc51qS',
                expanded_url:
                  'https://twitter.com/kylemathews/status/1264990757145829379/photo/1',
                type: 'photo',
                sizes: {
                  large: {
                    w: 810,
                    h: 866,
                    resize: 'fit',
                  },
                  medium: {
                    w: 810,
                    h: 866,
                    resize: 'fit',
                  },
                  thumb: {
                    w: 150,
                    h: 150,
                    resize: 'crop',
                  },
                  small: {
                    w: 636,
                    h: 680,
                    resize: 'fit',
                  },
                },
              },
              {
                id: 1264990744365785098,
                id_str: '1264990744365785098',
                indices: [138, 161],
                media_url: 'http://pbs.twimg.com/media/EY4mYToUYAo28sf.jpg',
                media_url_https:
                  'https://pbs.twimg.com/media/EY4mYToUYAo28sf.jpg',
                url: 'https://t.co/yV84nc51qS',
                display_url: 'pic.twitter.com/yV84nc51qS',
                expanded_url:
                  'https://twitter.com/kylemathews/status/1264990757145829379/photo/1',
                type: 'photo',
                sizes: {
                  small: {
                    w: 680,
                    h: 83,
                    resize: 'fit',
                  },
                  medium: {
                    w: 1200,
                    h: 146,
                    resize: 'fit',
                  },
                  thumb: {
                    w: 146,
                    h: 146,
                    resize: 'crop',
                  },
                  large: {
                    w: 1202,
                    h: 146,
                    resize: 'fit',
                  },
                },
              },
            ],
          },
          source:
            '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 10907062,
            id_str: '10907062',
            name: 'Kyle Mathews',
            screen_name: 'kylemathews',
            location: 'San Francisco, California',
            description:
              'Tech entrepreneur hanging out in Silicon Valley. Founder @gatsbyjs. Married to @shannonb_ux.',
            url: 'https://t.co/0LC3lbfOcE',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/0LC3lbfOcE',
                    expanded_url: 'https://www.bricolage.io',
                    display_url: 'bricolage.io',
                    indices: [0, 23],
                  },
                ],
              },
              description: {
                urls: [],
              },
            },
            protected: false,
            followers_count: 22827,
            friends_count: 1983,
            listed_count: 655,
            created_at: 'Thu Dec 06 16:12:40 +0000 2007',
            favourites_count: 75175,
            utc_offset: null,
            time_zone: null,
            geo_enabled: true,
            verified: false,
            statuses_count: 40092,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url:
              'http://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_image_url_https:
              'https://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_tile: false,
            profile_image_url:
              'http://pbs.twimg.com/profile_images/1201364751843905536/Q1XVVkab_normal.jpg',
            profile_image_url_https:
              'https://pbs.twimg.com/profile_images/1201364751843905536/Q1XVVkab_normal.jpg',
            profile_link_color: '3B94D9',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: null,
            follow_request_sent: null,
            notifications: null,
            translator_type: 'none',
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 18,
          favorite_count: 196,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          possibly_sensitive_appealable: false,
          lang: 'en',
        },
        retweet_count: 1,
        favorite_count: 7,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        possibly_sensitive_appealable: false,
        lang: 'en',
      }}
    />
  );
};

const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <SafeAreaView />
      <ScrollView
        contentContainerStyle={{backgroundColor: 'white', padding: 16}}>
        <View style={{paddingVertical: 16}}>
          <View
            style={{
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              borderRadius: 4,
            }}>
            {/*  <Instagram id={'Bwjpxgph9DE'} containerBorderRadius={4} /> */}
          </View>
        </View>
        <View style={{paddingVertical: 16}}>
          <View
            style={{
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              borderRadius: 12,
              elevation: 2,
            }}>
            <AuthTwitter
              id={'1255068185935720450'}
              language={'en'}
              containerBorderRadius={12}
              onTweetPress={() => null}
            />
          </View>
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  );
};
// 1000813977318944768
// 930561247191470082
// 1000844277847601152
export default App;
