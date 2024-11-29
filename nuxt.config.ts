// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      VITE_APP_PROJECT_ID: process.env.VITE_APP_PROJECT_ID,
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
