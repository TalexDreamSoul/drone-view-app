<script setup lang="ts">
defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <div class="RealTab">
    <slot />
  </div>
</template>

<style>
.RealTab {
  position: relative;
  padding: 2px 4px;
  display: inline-flex;

  gap: 4px;

  border-radius: 12px;
  border: 2px solid #B7BBBC20;
  backdrop-filter: saturate(180%) blur(10px) brightness(100%);
}
</style>