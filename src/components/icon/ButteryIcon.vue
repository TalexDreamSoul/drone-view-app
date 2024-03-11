<script setup lang="ts">
defineProps<{
  percentage?: number,
}>()

</script>

<template>
  <div class="t-icon" :class="{ danger: (percentage || 100) <= 30, warning: (percentage || 100) <= 60 }">
    <span v-for=" in Math.round(((percentage || 100) / 20))" class="percent" />
  </div>
</template>

<style scoped>
.t-icon .percent {
  position: relative;
  display: inline-block;

  top: 10%;

  width: 3px;
  height: 80%;

  background-color: var(--color, #6EDF46);
}

.t-icon.warning {
  --color: #FFC200
}

.t-icon.danger {
  --color: #FF5753
}

.t-icon {
  &::before {
    content: "";
    position: absolute;

    width: 2px;
    height: 8px;

    top: 4px;
    left: 120%;

    border-radius: 2px;
    background-color: #fff;
  }

  display: flex;
  padding: 0 2px;

  gap: 2px;

  width: 24px;
  height: 16px;

  border-radius: 6px;
  border: 2px solid #fff;

  transform: scale(.75)
}

.t-icon.active {}

.t-icon svg {
  width: 100%;
  height: 100%;
}
</style>