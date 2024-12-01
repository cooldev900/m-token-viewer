import type { INetwork } from "@/utils/type";
import { useAppKitNetwork } from "@reown/appkit/vue";

export const useUseBackenURL = () => {
  const networkData = useAppKitNetwork();
  const config = useRuntimeConfig();
  const networks = config.public.networks as unknown as INetwork[];
  return networks.find((network) => network.chainId === networkData.value.chainId?.toString())?.apiUrl || '';
}
