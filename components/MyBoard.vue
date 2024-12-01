<template>
  <div class="mt-4 sm:mt-8">
    <network-switcher />
    <div class="flex flex-col items-center justify-center p-2 sm:p-6">
      <div class="bg-white shadow-lg rounded-lg p-4 sm:px-8 w-full">
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label for="picture">Address</Label>
          <Input id="address" type="text" v-model="addressValue" class="text-white"
            placeholder="Please enter address ..." @keydown.enter="setBalanceData"/>
        </div>
        <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label for="picture">MToken Balance</Label>
          <Input id="address" type="text" :value="balance" disabled class="text-white" />
        </div>
      </div>
    </div>
    <balance-chart :balanceData="balanceData" />
  </div>
</template>
<script lang="ts" setup>
import type { IBalanceHistory } from '@/utils/type';
import { useAccount } from '@wagmi/vue';
const { isConnected, address } = useAccount();
const addressValue = ref(isConnected.value ? address.value : '');
const balance = ref('');
const balanceData = ref<IBalanceHistory[]>([]);

const setBalanceData = async () => {
  if (!addressValue.value) balanceData.value = [];
  try {
    const { data } = await fetchBalanceHistory(addressValue.value?.toString() || '');
    if (data?.holder?.balanceChanges) balanceData.value = data.holder.balanceChanges;
  } catch (error) {
    balanceData.value = [];
    console.log(error);
  }
}

onMounted(async () => {
  await setBalanceData();
})
</script>