<script setup lang="ts">
import GlassBox from '../../components/GlassBox.vue';

defineProps<{
  modelValue?: boolean,
  error?: boolean
}>()

</script>

<template>
  <div class="DisasterPos" :class="{ error }">
    <GlassBox white glass title="无人机实时定位" class="DisasterPos-Mention">
      无法完成无人机定位！
    </GlassBox>
  </div>
</template>

<style>
.DisasterPos-Mention {
  position: absolute;

  left: 5%;
  bottom: 1rem;

  width: 90%;
}

@keyframes shinning {
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(.5);
  }

  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
}

.DisasterPos {
  &::before {
    content: "";
    position: absolute;

    width: 96px;
    height: 96px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    filter: blur(50px);

    border-radius: 50%;
    background-color: #F75335;

    animation: 1.25s shinning infinite;
  }

  position: relative;
  margin: 1rem 0;

  width: 30%;
  /* height: 230px; */

  border-radius: 12px;
  background-color: #232323;
}
</style>