<template>
  <div class="flex flex-col items-center justify-center flex-1 p-6">
    <div v-if="!isConnected" class="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
      <h2 class="text-xl font-bold text-center text-gray-800 mb-6">Wallet Connect</h2>

      <div class="text-center">
        <p class="text-gray-600 mb-4">
          Connect your wallet to proceed.
        </p>
        <button
          @click="connect"
          class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppKit } from '@reown/appkit/vue'
import { useDisconnect, useAccount } from "@wagmi/vue";

const { isConnected } = useAccount();

const { open } = useAppKit()
const { disconnect } = useDisconnect();

const connect = () => {
  open();
}

const handleDisconnet = () => disconnect();
</script>
