<template>
  <div class="flex flex-col items-center justify-center p-2 sm:p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full">
      <!-- <h2 class="text-xl font-bold text-center text-gray-800 mb-6">Network Switcher</h2> -->

      <!-- Network Selector -->
      <div class="mb-6 flex justify-start gap-2 items-center">
        <label for="network" class="block text-sm font-medium text-gray-600 text-nowrap">
          Select Network
        </label>
        <select
          disabled
          id="network"
          v-model="selectedNetwork"
          class="block px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:text-black max-w-sm"
        >
          <option v-for="network in networks" :key="network.chainId" :value="network.chainId">{{ network.name }}</option>
        </select>
      </div>

      <!-- Display Contract Address -->
      <div>
        <h3 class="text-sm font-medium text-gray-600 mb-2"><b>MToken</b> Contract Address:</h3>
        <p class="text-gray-800 break-all">{{ displayedContractAddress }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INetwork } from "@/utils/type";
import { useAppKitNetwork } from "@reown/appkit/vue";

const config = useRuntimeConfig()
const networks = config.public.networks as unknown as INetwork[];
const networkData = useAppKitNetwork();

const selectedNetwork = ref<string | undefined>();
// Reactive variable to hold the displayed contract address
const displayedContractAddress = ref('');

// Watch the selected network and update the contract address
watch([networkData, networks], ([newNetworkData, newNetworks]) => {
  selectedNetwork.value = newNetworkData.chainId?.toString();
  displayedContractAddress.value = newNetworks.find((network) => network.chainId === networkData.value.chainId?.toString())?.mTokenAddress || "";
},
{
  deep: true,
  immediate: true,
});
</script>