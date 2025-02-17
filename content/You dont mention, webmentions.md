---
title: "You dont mention, webmentions"
published: true
description: "A whirlwind intro to webmentions"
tags: ['frontend', 'webmmention', 'javascript', 'graphql']
//cover_image: https://direct_url_to_image.jpg
canonical_url: "https://gregbenner.life/you-dont-mention-webmentions/"
---

Perhaps you've heard whispers or mention of them and now you are finally ready to wield the awesome power of <a href="https://webmention.io/">webmentions</a>.

<blockquote>
    <p>Webmention.io is a hosted service created to easily receive webmentions on any web page.</p>
</blockquote>


Imagine for a second you have a blog, and you also read other blogs. Normally if you wanted to comment on a blog you would be faced with either an email signup and confirmation, or some individually coded social providers, or... Disqus.

That was 2019, now welcome the future. When you link another post from a site, the post owner can see what you wrote and share it like a commment on that post. No messy 3rd party javascript dragging down that sweet, sweet lighthouse score.

Now we can take this another step further by monitoring popular social media sites for mentions of your posts. Sweet so you can basically have a static site with a javascript free commenting and like system.

The basic setup is available on https://webmention.io/ but be forewarned the latter part of the setup may take some time investment; I will try to aid with that. This article is super helpful and you should start there https://pixelhop.io/writing/2020/05/get-started-with-webmentions-in-gridsome/ I will make use of the authors gridsome plugin. 

Here's the end result of my first web mentions from twitter.

<img src="https://res.cloudinary.com/https-gregbenner-life/image/upload/v1589772655/Screenshot_from_2020-05-17_23-25-44_ikvkih.png" />

Cool so I've added each twutter user image and linked it back to their profile, then tallied up the like and retweets, this is filtered per post.

I'm using Vue.js and GraphQL via gridsome but you can adapt to your needs.

Go ahead and add `@zefman/gridsome-source-webmention` to your gridsome project.

add the plugin to your gridsome config

```js
{
    use: '@zefman/gridsome-source-webmention',
    options: {
    domain: 'gregbenner.life', // Your webmention domain
    token: 'your-webmention-io-token', // Your secret webmention token
    },
},
``` 

Super cool, let's now fetch and display some webmentions.

```html
<div class="mentions">
    <div v-for="edge in $static.mentions.edges" :key="edge.node.wmId">
    <a :href="edge.node.author.url"><img :alt="edge.node.author.name" :src="edge.node.author.photo" width="50" /></a> <br />

    </div>
    likes {{likes}}<br />
    reposts {{reposts}}
</div>
```

```js
<static-query>
  query  {
    mentions: allWebMention(filter: { wmTarget: { } }) {
      edges {
        node {
          likeOf
          wmId
          url
          wmProperty
          wmSource
          repostOf
          content {
            text
          }
          author {
            name
            photo
            url
          }
        }
      }
    }
  }
</static-query>
```


```js
...
computed: {
    likes() {
      return this.$static.mentions.edges.filter(edge => edge.node.likeOf)
    },
    likesCount() {
      return this.likes.length
    },
    reposts() {
      return this.$static.mentions.edges.filter(edge => edge.node.repostOf)
    },
    repostsCount() {
       return this.repost.length
    }
  }
  ...
  ```

  That's all for now folks!
