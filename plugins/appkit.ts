import { createAppKit } from "@reown/appkit/vue";
import { mainnet, sepolia, type AppKitNetwork } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

export default defineNuxtPlugin(() => {
  // 1. Get projectId from https://cloud.reown.com
  const projectId = process.env.VITE_APP_PROJECT_ID || "f25326af0123a37047542d8ad44c49c3";

  // 2. Create a metadata object
  const metadata = {
    name: "AppKit",
    description: "AppKit Example",
    url: "https://example.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  };

  // 3. Set the networks
  const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, sepolia];

  // 4. Create Wagmi Adapter
  const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
  });

  // 5. Create the AppKit modal
  const modal = createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    metadata,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });

  // Provide AppKit globally
  return {
    provide: {
      appkit: modal,
    },
  };
});
