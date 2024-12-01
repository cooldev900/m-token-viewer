<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
import { useUseBalanceHistory } from '@/composables/useBalanceHistory';
import { useAccount } from '@wagmi/vue';
const account = useAccount();
const data = useUseBalanceHistory(account.address.value?.toString() || '')
</script>

<style>

</style>