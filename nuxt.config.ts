// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/style/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
       {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700",
       },
       {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700",
       },
      ],
    },
  },
});
