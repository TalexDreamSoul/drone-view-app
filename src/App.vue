<script setup lang="ts">
import HeadBar from "./views/HeadBar.vue";
import NavBar from "./components/navbar/NavBar.vue";
import DisasterView from "./views/disaster/DisasterView.vue";
import { ref } from "vue";

const navOption = ref<{
  now: {
    name: string;
    comp: any;
    svg: string;
  } | null;
}>({
  now: null,
});
</script>

<template>
  <div class="AppContainer">
    <NavBar :option="navOption" />

    <DisasterView :name="navOption.now?.name!">
      <template #header>
        <HeadBar :name="navOption.now?.name!" />
      </template>
    </DisasterView>
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
