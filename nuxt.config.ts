/* eslint-disable @typescript-eslint/indent */
/* eslint-disable quotes */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: "https://jswhisperer.uk",
        name: "jswhisperer",
    },
    app: {
        head: {
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                          {
                              src: "https://jswhisperer.uk",
                              id: "pirschjs",
                              defer: true,
                              "data-code": process.env.PIRSCH_CODE,
                              type: "text/javascript",
                          },
                      ]
                    : []),
            ],
        },
    },

    extends: ["@bloggrify/core", "@bloggrify/mistral"],

    modules: ["nuxt-schema-org", "@nuxtjs/seo"],
});