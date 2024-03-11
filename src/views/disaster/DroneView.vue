<script setup lang="ts">
import ModelHolder from '../../components/ModelHolder.vue'

defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <div class="DroneView">
    <div class="DroneView-Intro">
      <p>无人机喷雾器</p>
      <h3>Drone MJX Bugs 19 EIS</h3>
    </div>

    <div class="DroneInnerView">
      <ModelHolder />
    </div>
  </div>
</template>

<style>
.DroneView {
  color: #fff
}

.DroneInnerView {
  border-radius: 20px;

  overflow: hidden;
}

.DroneView .DroneView-Intro {
  display: flex;

  flex-direction: column;

  align-items: self-start;
}

.DroneView-Intro p {
  margin: 0;

  opacity: .75;
  font-size: 14px;
}

.DroneView-Intro h3 {
  margin: 0;
}
</style>