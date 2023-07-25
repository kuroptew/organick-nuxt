// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/style/reset.scss', '@/assets/style/style.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";',
        },
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/max-len': ['error', {
      code: 120,
      template: 100,
    }],
  },
});
