<template>
  <div class="flex flex-col items-center justify-center p-2 sm:p-6">
    <div class="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-2 sm:p-8 w-full">
      <h2 class="font-bold text-lg">M Token Holders</h2>
      <Table class="mt-2">
        <TableHeader>
          <TableRow class="flex flex-row justify-between sm:table-row">
            <TableHead>
              Address
            </TableHead>
            <TableHead class="text-right">
              Balance
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="w-full">
          <TableRow v-if="isLoading">
            <TableCell>
              Loading ...
            </TableCell>
          </TableRow>
          <TableRow v-else-if="error">
            <TableCell class="font-medium">
              {{ error?.message }}
            </TableCell>
          </TableRow>
          <template v-else>
            <TableRow v-for="item in holders" :key="item.id" class="flex flex-col sm:table-row">
              <TableCell class="font-medium">
                {{ item.id }}
              </TableCell>
              <TableCell class="text-right">
                {{ item.balance }}
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHolders } from '@/composables/useHolders';
import type { IHolder } from '@/utils/type';
const { data, isLoading, error } = useHolders();
const holders = ref<IHolder[]>([]);

watch(data, (newData) => {
  holders.value = newData.data.holders || []
})
</script>