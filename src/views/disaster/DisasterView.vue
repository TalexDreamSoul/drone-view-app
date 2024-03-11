<script setup lang="ts">
import DisasterAside from "./DisasterAside.vue";
import DisasterRealView from "./DisasterRealView.vue";
import DisasterPos from "./DisasterPos.vue";

defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="AppLayout">
    <slot name="header" />
    <div class="DisasterView">
      <div class="DisasterView-Main">
        <DisasterRealView :name="name" />

        <div class="DisasterView-Sub">
          <div class="DisasterView-SubControl">
            <div v-for=" in 3" class="demo-button" />
          </div>

          <DisasterPos />
        </div>

        1
      </div>

      <DisasterAside />
    </div>
  </div>
</template>

<style>
.AppLayout {
  flex: 1;
}

.demo-button {
  &:hover {
    border-radius: 8px;
  }

  position: relative;

  width: 33.33%;
  height: 100%;

  aspect-ratio: 1;

  cursor: pointer;
  transition: 0.25s;
  border-radius: 12px;
  background-color: #fcfcfc50;
}

.auto-focus-icon {
  &::before {
    content: "A";
    position: absolute;

    top: -2px;
    left: 1.5px;

    color: #000;
    transform: scale(0.8);
  }

  position: relative;
  display: inline-block;
  margin-right: 1px;
  top: 1px;

  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: #fff;
}

.DisasterView-SubControl {
  position: relative;
  display: flex;
  margin: 1rem 0;
  padding: 2rem;

  justify-content: space-between;

  gap: 1rem;
  flex: 1;

  border-radius: 12px;
  box-sizing: border-box;
}

.DisasterView-Sub {
  display: flex;

  flex: 1;
  gap: 1rem;

  justify-content: space-between;

  overflow: hidden;
  box-sizing: border-box;
}

.DisasterView-Main {
  display: flex;
  padding: 1rem;

  flex-direction: column;

  flex: 1;

  color: #fff;

  overflow: hidden;
  box-sizing: border-box;
}

.DisasterView {
  display: flex;

  justify-content: space-between;

  width: 100%;
  height: 100%;
}
</style>
