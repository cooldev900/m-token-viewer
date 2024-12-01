import type { INetwork } from "@/utils/type";
import { useChainId, useBalance } from "@wagmi/vue";
export function useMTokenBalance(address: `0x${string}` | undefined) {
  if (!address) return ref('');
  const config = useRuntimeConfig();
  const chainId = useChainId();
  const networks = config.public.networks as unknown as INetwork[];
  const token = networks.find((network) => network.chainId === chainId.value.toString())!.mTokenAddress;

  const { data } = useBalance({ address, chainId, token });
  return data.value?.formatted || ref('');
}