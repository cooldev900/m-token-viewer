import { WagmiPlugin } from '@wagmi/vue';
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

// Define the Nuxt plugin
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WagmiPlugin, { config });
});
