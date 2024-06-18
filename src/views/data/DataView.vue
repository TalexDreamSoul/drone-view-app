<script setup lang="ts">
import AirQuality from "./AirQuality.vue";
import HarmfulGas from "./HarmfulGas.vue";
import PollutingGas from "./PollutingGas.vue";
import DataSideBar from "./DataSideBar.vue";

defineProps<{
    name: String,
}>();

</script>

<template>
  <div class="dataview">
    <slot name="header" />
    <div class="main">
        <!-- 主界面 -->
      <div class="data_left">
        <AirQuality/>
        <div class="chart_row">
          <HarmfulGas/>
          <PollutingGas/>
        </div>
      </div>
<!-- 右边拦 -->
      <div class="data_right">
        <DataSideBar/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dataview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
.data_left {
  width: 75%;
}
.chart_row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}
.data_right {
  width: 25%;
  height: 100%;
}
</style>