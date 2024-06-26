<script setup lang="ts">
import HeadBar from "./views/HeadBar.vue";
import NavBar from "./components/navbar/NavBar.vue";
import DisasterView from "./views/disaster/DisasterView.vue";
import { ref } from "vue";
import DataView from "./views/data/DataView.vue";
import VideoView from './views/video/VideoView.vue';
import SellView from "./views/sell/SellView.vue";

const navOption = ref<{
  now: {
    name: string;
    comp: any;
    svg: string;
    [prop: string]: string
  } | null;
}>({
  now: null,
});
</script>

<template>
  <div class="AppContainer">
    <NavBar :option="navOption" />

    <DisasterView
      :name="navOption.now?.name!"
      v-if="navOption.now?.normalize"
    >
      <template #header>
        <HeadBar :name="navOption.now?.name!" />
      </template>
    </DisasterView>

    <DataView :name="navOption.now?.name!" v-else-if="navOption.now?.name === '数据监测平台'">
      <template #header>
        <HeadBar :name="navOption.now?.name!" />
      </template>
    </DataView>

    <VideoView :name="navOption.now?.name!" v-else-if="navOption.now?.name === '视频详情浏览'">
      <template #header>
        <HeadBar :name="navOption.now?.name!" />
      </template>
    </VideoView>
    
    <SellView :name="navOption.now?.name!" v-else>
      <template #header>
        <HeadBar :name="navOption.now?.name!" />
      </template>
    </SellView>
  </div>
</template>

<style scoped>
.AppContent {
  /* margin: 1rem; */
  /* padding: 1rem; */

  flex: 1;

  box-sizing: border-box;
}

body,
#app,
.AppContainer {
  position: absolute;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  overflow: hidden;
}

.AppContainer {
  display: flex;

  background-color: #07090a;
}
</style>
