<script setup lang="ts">
defineProps<{
  title?: string,
  white?: boolean
  noMargin?: boolean
  glass?: boolean
  noBorder?: boolean
}>()

</script>

<template>
  <div :class="{ white, noMargin, glass, noBorder }" class="GlassBox">
    <slot v-if="title" name="title">
      <p class="title">{{ title }}</p>
    </slot>

    <span class="content">
      <slot />
    </span>
  </div>
</template>

<style>
.GlassBox {
  padding: .5rem;
  margin-top: .75rem;

  text-align: left;

  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid #202122;
  background: rgba(0, 0, 0, 0.5);
}

.GlassBox.white {
  color: #fff;

  background: transparent;
  /* #f0f0f000; */
  border: 2px solid #92989920;
}

.GlassBox.glass {
  border-radius: 8px !important;
  backdrop-filter: saturate(150%) blur(15px) brightness(100%);
}

.GlassBox.noMargin {
  padding: 2px 8px;
  margin: 0 !important
}

.GlassBox.noBorder {
  padding: .0125rem;
  border: none !important;
}

.GlassBox .title {
  margin: .1rem 0 .5rem;

  opacity: .75;
  font-size: 12px;
  font-weight: 600;
}

.GlassBox.noMargin .title {
  margin: .1rem 0 .25rem;
}

.GlassBox .content {
  display: flex;

  align-items: center;
  justify-content: space-between;

  font-size: 14px;
}

.GlassBox .addon-info {
  /* float: right */
  opacity: .75;
  font-size: 12px;
}

.GlassBox div.addon-info {
  display: flex;

  flex-direction: column;
}

.GlassBox div.addon-info span.line {
  display: flex;

  gap: 10px;
  justify-content: space-between;
}
</style>