/* eslint-disable quotes */
export default defineAppConfig({
    logo: "./images/logo.svg",

    url: "https://jswhisperer.uk",

    theme: "mistral",

    // If you only have one author, you can set the author here
    // It will be used as the default author for all posts AND as the general logo/description/socials for the website
    name: "jswhisperer",
    avatar: "/images/avatar.jpg",
    description: "jswhisperer blog",

    socials: {
        // twitter: "https://twitter.com",
        // mastodon: "https://piaille.fr",
        // youtube: "https://youtube.com",
        // linkedin: "https://linkedin.com",
        // facebook: "https://facebook.com",
        // instagram: "https://instagram.com",
        // github: "https://github.com",

        // possible values : 'facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype'
        // see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: [
            "facebook",
            "twitter",
            "linkedin",
            "email",
            "pinterest",
            "reddit",
            "pocket",
            "whatsapp",
            "telegram",
            "skype",
        ],
    },

    newsletter: {
        enabled: true,
        form_action: "YOUR_NEWSLETTER_FORM_ACTION",
        provider: "demo",
    },

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: "10519", // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // if you have multiple authors, you can set them here
    authors: [
        {
            username: "gregory-palaci",
            name: "gregory palaci",
            description: "jswhisperer blog",
            avatar: "/images/avatar.jpg",
            socials: {
                // twitter: "https://twitter.com",
                // twitter_username: "username",
                // mastodon: "https://piaille.fr",
                // youtube: "https://youtube.com",
                // linkedin: "https://linkedin.com",
                // facebook: "https://facebook.com",
                // instagram: "https://instagram.com",
                // github: "https://github.com",
            },
        },
    ],

    menu: () => [
        { name: "Home", path: "/" },
        { name: "Archives", path: "/archives" },
    ],

    robots: [
        {
            UserAgent: "*",
            // Disallow: ["/"],
        },
    ],
});
