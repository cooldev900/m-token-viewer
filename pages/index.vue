<template>
    <div class="w-full h-full flex flex-col">
      <m-token-board v-if="isConnected"/>
      <wallet-connect/>
    </div>
  </template>

  <script lang="ts" setup>
    import { useAccount } from '@wagmi/vue';
    const { isConnected } = useAccount();
  </script>