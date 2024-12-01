<template>
  <div class="flex flex-col items-center justify-center p-2 sm:p-6 shadow-lg rounded-lg w-full mt-2 sm:mt-4">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else class="flex flex-col justify-center bg-white shadow-lg rounded-lg p-2 sm:p-8 w-full">
      <div class="mb-2">MToken Volume: {{ volume }}</div>
      <holders-table :holdersData="holders" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IHolder } from '@/utils/type';
const { data, isLoading, error } = useSubgraph();
const holders = ref<IHolder[]>([]);
const volume = ref<string>('');

watch(data, (newData) => {
  holders.value = newData?.data.holders || []
  volume.value = newData?.data.token.volume || '';
}, {
  deep: true,
  immediate: true,
});
</script>