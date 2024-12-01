<template>
  <div>
    <network-switcher/>
    <account-info v-if="isConnected"/>
  </div>
</template>
<script lang="ts" setup>
import { useAccount } from '@wagmi/vue';
const { isConnected } = useAccount();
</script>