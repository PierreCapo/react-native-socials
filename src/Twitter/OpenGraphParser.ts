// @ts-nocheck
// copied from https://github.com/Osedea/react-native-opengraph-kit/blob/master/OpenGraphParser.js
import { AllHtmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

function findOGTags(content, url) {
  const metaTagOGRegex = /<meta[^>]*(?:property=[ '"]*og:([^'"]*))?[^>]*(?:content=["]([^"]*)["])?[^>]*>/gi;
  const matches = content.match(metaTagOGRegex);
  const meta = {};

  if (matches) {
    const metaPropertyRegex = /<meta[^>]*property=[ "]*og:([^"]*)[^>]*>/i;
    const metaContentRegex = /<meta[^>]*content=[ "]([^"]*)[^>]*>/i;

    for (let i = matches.length; i--; ) {
      let propertyMatch;
      let contentMatch;
      let metaName;
      let metaValue;

      try {
        propertyMatch = metaPropertyRegex.exec(matches[i]);
        contentMatch = metaContentRegex.exec(matches[i]);

        if (!propertyMatch || !contentMatch) {
          continue;
        }

        metaName = propertyMatch[1].trim();
        metaValue = contentMatch[1].trim();

        if (!metaName || !metaValue) {
          continue;
        }
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }

        continue;
      }

      if (metaValue.length > 0) {
        if (metaValue[0] === "/") {
          if (metaValue.length <= 1 || metaValue[1] !== "/") {
            if (url[url.length - 1] === "/") {
              metaValue = url + metaValue.substring(1);
            } else {
              metaValue = url + metaValue;
            }
          } else {
            // handle protocol agnostic meta URLs
            if (url.indexOf("https://") === 0) {
              metaValue = `https:${metaValue}`;
            } else if (url.indexOf("http://") === 0) {
              metaValue = `http:${metaValue}`;
            }
          }
        }
      } else {
        continue;
      }

      meta[metaName] = entities.decode(metaValue);
    }
  }

  return meta;
}

function findHTMLMetaTags(content, url) {
  const metaTagHTMLRegex = /<meta(?:[^>]*(?:name|itemprop)=[ '"]([^'"]*))?[^>]*(?:[^>]*content=["]([^"]*)["])?[^>]*>/gi;
  const matches = content.match(metaTagHTMLRegex);
  const meta = {};

  if (matches) {
    const metaPropertyRegex = /<meta[^>]*(?:name|itemprop)=[ "]([^"]*)[^>]*>/i;
    const metaContentRegex = /<meta[^>]*content=[ "]([^"]*)[^>]*>/i;

    for (let i = matches.length; i--; ) {
      let propertyMatch;
      let contentMatch;
      let metaName;
      let metaValue;

      try {
        propertyMatch = metaPropertyRegex.exec(matches[i]);
        contentMatch = metaContentRegex.exec(matches[i]);

        if (!propertyMatch || !contentMatch) {
          continue;
        }

        metaName = propertyMatch[1].trim();
        metaValue = contentMatch[1].trim();

        if (!metaName || !metaValue) {
          continue;
        }
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }

        continue;
      }

      if (metaValue.length > 0) {
        if (metaValue[0] === "/") {
          if (metaValue.length <= 1 || metaValue[1] !== "/") {
            if (url[url.length - 1] === "/") {
              metaValue = url + metaValue.substring(1);
            } else {
              metaValue = url + metaValue;
            }
          } else {
            // handle protocol agnostic meta URLs
            if (url.indexOf("https://") === 0) {
              metaValue = `https:${metaValue}`;
            } else if (url.indexOf("http://") === 0) {
              metaValue = `http:${metaValue}`;
            }
          }
        }
      } else {
        continue;
      }

      meta[metaName] = entities.decode(metaValue);
    }

    if (!meta.title) {
      const titleRegex = /<title>([^>]*)<\/title>/i;
      const titleMatch = content.match(titleRegex);

      if (titleMatch) {
        meta.title = entities.decode(titleMatch[1]);
      }
    }
  }

  return meta;
}

function parseMeta(html, url, options) {
  let meta = findOGTags(html, url);

  if (options.fallbackOnHTMLTags) {
    try {
      meta = {
        ...findHTMLMetaTags(html, url),
        ...meta,
      };
    } catch (error) {
      if (__DEV__) {
        console.log("Error in fallback", error);
      }
    }
  }

  return meta;
}

async function fetchHtml(urlToFetch, forceGoogle = false) {
  let result;

  let userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36";

  if (forceGoogle) {
    userAgent =
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
  }

  try {
    result = await fetch(urlToFetch, {
      method: "GET",
      headers: {
        "user-agent": userAgent,
      },
    });

    if (result.status >= 400) {
      throw result;
    }

    return result.text().then((resultParsed) => resultParsed);
  } catch (responseOrError) {
    if (responseOrError.message && __DEV__) {
      if (responseOrError.message === "Network request failed") {
        console.log(urlToFetch, "could not be fetched");
      } else {
        console.log(responseOrError);
      }
      return null;
    }

    return responseOrError.text().then((error) => {
      if (__DEV__) {
        console.log("An error has occured while fetching url content", error);
      }
      return null;
    });
  }
}

async function fetchJSON(urlToFetch, urlOfVideo) {
  try {
    const result = await fetch(urlToFetch, { method: "GET" });

    if (result.status >= 400) {
      throw result;
    }

    const resultParsed = await result.json();

    return {
      title: resultParsed.title,
      image: resultParsed.thumbnail_url,
      url: urlOfVideo,
    };
  } catch (error) {
    if (__DEV__) {
      console.log(error);
    }
    return null;
  }
}

function getUrls(contentToMatch) {
  const regexp = /(?:(?=[\s`!()\[\]{};:'".,<>?«»“”‘’])|\b)((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/|[a-z0-9.\-]+[.](?:com|org|net))(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))*(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]|\b))/gi;
  const urls = contentToMatch.match(regexp);
  const urlsToReturn = [];

  if (urls && urls.length) {
    urls.forEach((url) => {
      if (url.toLowerCase().indexOf("http") === 0) {
        urlsToReturn.push(url);
      } else {
        urlsToReturn.push(`http://${url}`);
      }
    });
  } else {
    if (__DEV__) {
      console.log("Could not find an html link");
    }
  }

  return urlsToReturn;
}

async function extractMeta(
  textContent = "",
  options = { fallbackOnHTMLTags: true }
) {
  try {
    const urls = getUrls(textContent);

    const metaData = [];
    let i = 0;

    while (i < urls.length) {
      if (urls[i].indexOf("youtube.com") >= 0) {
        metaData.push(
          await fetchJSON(
            `https://www.youtube.com/oembed?url=${urls[i]}&format=json`,
            urls[i]
          )
        );
      } else {
        /* eslint-disable no-loop-func */
        metaData.push(
          await fetchHtml(urls[i]).then((html) => ({
            ...(html ? parseMeta(html, urls[i], options) : {}),
            url: urls[i],
          }))
        );
      }

      i++;
    }
    return metaData;
  } catch (e) {
    console.log(e);

    return {};
  }
}

export const openGraphTool = {
  extractMeta,
  // Exporting for testing
  findOGTags,
  findHTMLMetaTags,
};
// For testing
