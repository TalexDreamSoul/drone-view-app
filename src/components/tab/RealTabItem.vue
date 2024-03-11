<script setup lang="ts">
defineProps<{
  active?: boolean,
}>()

</script>

<template>
  <div :class="{ active }" class="RealTabItem">
    <slot />
  </div>
</template>

<style>
.RealTabItem {
  &:hover {
    opacity: .85;
  }
  display: flex;
  padding: 2px 8px;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  transition: .25s;
}

.RealTabItem.active {
  background-color: #ffffff40
}
</style>