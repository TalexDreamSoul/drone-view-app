<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HolderCss from './holder-css.css?raw'

const iframe = ref()

onMounted(() => {
  const webview = iframe.value

  webview.addEventListener('dom-ready', () => {
    console.log('loaded')
    webview.insertCSS(HolderCss)
  })
})
</script>

<template>
  <webview ref="iframe" title="Dji FPV by SDC - High performance drone" frameborder="0" allowfullscreen
    mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
    src="https://sketchfab.com/models/d471ea8c6235457b8e131842e2cf3783/embed?autospin=1&autostart=1&annotations_visible=0&preload=1&ui_hint=0&ui_theme=dark">
  </webview>
</template>