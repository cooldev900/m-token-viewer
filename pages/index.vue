<template>
    <div class="w-full h-full flex flex-col">
      <my-board/>
      <m-token-board/>
      <wallet-connect/>
    </div>
  </template>

  <script lang="ts" setup>
    import { useAccount } from '@wagmi/vue';
    const { isConnected } = useAccount();
  </script>