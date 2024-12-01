<template>
  <div class="p-2 sm:p-6">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  balanceData: {
    type: Array as () => IBalanceHistory[],
    required: true,
  },
});

// Reactive series to dynamically update chart data
const series = ref<any>([
  {
    name: "Balance",
    data: [],
  },
]);

// Chart options
const chartOptions = ref({
  chart: {
    id: "balance-chart",
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    type: "datetime",
    title: {
      text: "Timestamp",
    },
  },
  yaxis: {
    title: {
      text: "Balance",
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy HH:mm:ss",
    },
  },
});

// Watch for changes in balanceData and update the series
watch(
  () => props.balanceData,
  (newData) => {
    series.value = [
      {
        name: "Balance",
        data: newData.map((entry) => ({
          x: new Date(Number(entry.timestamp) * 1000).getTime(),
          y: Number(entry.balance),
        })),
      },
    ];
  },
  { immediate: true } // Ensure the watcher runs on component initialization
);
</script>
