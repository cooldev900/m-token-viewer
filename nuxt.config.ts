// https://nuxt.com/docs/api/configuration/nuxt-config
import { URL, fileURLToPath } from "node:url";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      VITE_APP_PROJECT_ID: process.env.VITE_APP_PROJECT_ID,
      networks: [
        {
          chainId: 1,
          name: "Mainnet",
          mTokenAddress: "0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b"
        },
        {
          chainId: 11155111,
          name: "Sepolia",
          mTokenAddress: "0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b"
        },
      ]
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    "~/components/layout",
    "~/components",
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['appkit-button'].includes(tag),
    }
  },
  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url)),
        "@": fileURLToPath(new URL("./", import.meta.url)),
        // Add any other aliases you use in your code base
        // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
      },
    },
    plugins: [
      AutoImport({
        imports: ["vue", "vue-router"],
        dirs: ["./composables"],
        vueTemplate: true,
      }),
      Components({
        dirs: [
          "./components/**/*",
          // Component folders that should be auto-imported
        ],
        dts: true,
        directoryAsNamespace: true,
      }),
      nodePolyfills({
        // To exclude specific polyfills, add them to this list.
        exclude: [
          "fs", // Excludes the polyfill for `fs` and `node:fs`.
        ],
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@hebilicious/vue-query-nuxt'],
  css: ['@/assets/css/global.css'],
  ssr: false,
})
