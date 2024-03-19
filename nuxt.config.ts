// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxtjs/tailwindcss"],
  svgo: {
    componentPrefix: "Icon",
  },
});
