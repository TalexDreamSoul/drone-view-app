<script setup lang="ts">
defineProps<{
  active?: boolean,
}>()

</script>

<template>
  <div class="t-icon" :class="{ active }">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
      <path fill="currentColor"
        d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7M192 184H32V72h160zm48-22.95l-32-21.33v-23.44L240 95Z" />
    </svg>
</div>
</template>

<style>
.t-icon {
  &::before {
    content: "";
    position: absolute;

    width: 4px;
    height: 4px;

    top: 12px;
    left: 17px;

    border-radius: 50%;
    background-color: red;
  }
  width: 16px;
  height: 16px;

  margin-right: 4px;
}

.t-icon.active {

}

.t-icon svg {
  width: 100%;
  height: 100%;
}
</style>