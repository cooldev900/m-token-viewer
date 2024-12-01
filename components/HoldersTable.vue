<template>
  <div class="flex flex-col w-full items-center justify-center">
    <h2 class="font-bold text-lg">M Token Holders</h2>
    <Table class="mt-2 w-full">
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
        <template v-if="holdersData.length === 0">
          <TableEmpty>There is no holders</TableEmpty>
        </template>
        <template v-else>
          <TableRow v-for="item in holdersData" :key="item.id" class="flex flex-col sm:table-row">
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
</template>

<script lang="ts" setup>
defineProps({
  holdersData: {
    type: Array as () => IHolder[],
    required: true,
  },
});
</script>