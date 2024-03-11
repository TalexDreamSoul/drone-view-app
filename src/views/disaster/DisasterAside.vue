<script setup lang="ts">
import GlassBoxVue from '../../components/GlassBox.vue';
import DroneView from './DroneView.vue';
import ButteryIcon from '../../components/icon/ButteryIcon.vue';
import { computed, ref } from 'vue'


// const targetTime = new Date().getTime() + 3600000
const restPower = ref(4563)
const powerPercent = computed(() => Math.round((restPower.value / 4563) * 100))

function calcDiff() {
  restPower.value -= Math.floor(Math.random() * 5)
  // restPower.value -= 10
  if (restPower.value <= 0)
    restPower.value = 4563
  // const diffTime = targetTime - new Date().getTime()
}

setInterval(calcDiff, 500)
</script>

<template>
  <div class="DisasterAside">
    <DroneView />

    <GlassBoxVue title="机器状态">
      <span style="display: flex">
        <ButteryIcon :percentage="+powerPercent" />
        &nbsp;{{ powerPercent }}%
      </span>
      <span class="addon-info">{{ restPower }}/4563Mah</span>
    </GlassBoxVue>

    <GlassBoxVue title="自动工作">
      Block 1 - E 150
      <span class="addon-info">44.54 ac | Dads</span>
    </GlassBoxVue>

    <GlassBoxVue>
      <span style="display: flex">
        巡航中...
      </span>
      <span class="addon-info">
        03:30
        <span style="color: #1BE187">●</span>
      </span>
    </GlassBoxVue>

    <GlassBoxVue title="今日天气">
      <span style="font-size: 22px">13℃</span>
      <div class="addon-info">
        <span class="line"><span class="addon-info">降水</span>23%</span>
        <span class="line"><span class="addon-info">湿度</span>55%</span>
      </div>
    </GlassBoxVue>

    <br />

    <GlassBoxVue style="position: relative;left: 10px;width: 240px" noMargin noBorder title="高度">
      <span><span style="font-size: 20px">90</span>&nbsp;m</span>
      <div class="addon-info">
        <span class="line"><span class="addon-info">框架高度</span></span>
        <span class="line"><span class="addon-info">1920:1080</span></span>
      </div>
    </GlassBoxVue>

    <GlassBoxVue style="position: relative;left: 10px;width: 240px" noMargin noBorder title="飞行">
      <span style="font-size: 20px">03:30</span>
      <div class="addon-info">
        <span class="line"><span class="addon-info">ISO</span>600</span>
        <span class="line"><span class="addon-info">
            <span class="auto-focus-icon" />F
          </span>MF</span>
      </div>
    </GlassBoxVue>
  </div>
</template>

<style>
.DisasterAside {
  z-index: 1;
  padding: 1rem;

  width: 25%;

  color: #fff;
  box-sizing: border-box;
  border-left: 1px solid #18191A;
}
</style>