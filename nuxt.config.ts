// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/api/**':{
      proxy: 'https://dm-assignment-commonshare.koyeb.app/api/**'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
