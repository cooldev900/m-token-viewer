<template>
    <div class="w-full h-full flex flex-col">
      <wallet-connect/>
      <my-board v-if="isConnected"/>
      <m-token-board v-if="isConnected"/>
    </div>
  </template>

  <script lang="ts" setup>
    import { useAccount } from '@wagmi/vue';
    const { isConnected } = useAccount();
  </script>