<script setup lang="ts">
// import Background1 from "../../assets/forest_1.png";
// import Background2 from "../../assets/forest_2.png";
// import Background3 from "../../assets/forest_3.png";
// import Background4 from "../../assets/forest_4.png";
// import Background5 from "../../assets/forest_5.png";
import { floodSegment, helmetDetect } from "./common-util";
// import Video from "../../assets/video.mp4";
import RealTab from "../../components/tab/RealTab.vue";
import RealItemTab from "../../components/tab/RealTabItem.vue";
import GlassBox from "../../components/GlassBox.vue";
import VideoIcon from "../../components/icon/VideoIcon.vue";
// import ButteryIcon from "../../components/icon/ButteryIcon.vue";
import { ref, onBeforeUnmount, watchEffect } from "vue";

const backgrounds = ref<any[]>();

const BackGround = ref();

const props = defineProps<{
  modelValue?: boolean;
  name: string;
}>();
const options = ref({
  speed: 18,
  altitude: 885,
  wind: 7,
});
const time = ref("");

watchEffect(() => {
  const { name } = props;

  backgrounds.value = name === "施工巡检预警" ? helmetDetect : floodSegment;
});

let cnt = 0;
let index = 0;
let _time = setInterval(() => {
  if (!backgrounds.value) return;
  time.value = new Date().toLocaleTimeString();

  cnt += 1;
  if (cnt >= 300) {
    cnt = 0;
    BackGround.value = backgrounds.value[index % backgrounds.value.length];
    index += 1;

    options.value.speed = Math.floor(Math.random() * 10) + 1;

    options.value.altitude = Math.floor(Math.random() * 3000) + 1000;

    options.value.wind = Math.floor(Math.random() * 10) + 1;
  }
}, 10);

onBeforeUnmount(() => {
  clearInterval(_time);
});
</script>

<template>
  <div class="DisasterRealView">
    <div class="BackgroundImage">
      <!-- <video autoplay loop muted :src="Video" /> -->
      <img :src="BackGround" alt="realView" />
    </div>
    <div class="BackgroundImage filter">
      <!-- <video autoplay loop muted :src="Video" /> -->
      <img :src="BackGround" alt="realView" />
    </div>

    <div class="RealView-Controls">
      <div class="Controls-Top">
        <RealTab>
          <RealItemTab active> <VideoIcon active />推流视频 </RealItemTab>
          <RealItemTab> 摄像拍照 </RealItemTab>
        </RealTab>

        <div style="display: flex; gap: 1rem">
          <GlassBox glass noMargin white>
            {{ time }}
          </GlassBox>
          <GlassBox glass noMargin white>
            <span style="line-height: 20px; font-size: 12px; font-weight: 600">
              RESOLUTION: <span style="text-shadow: 0 0 8px #fff">4K</span>
            </span>
            <!-- <ButteryIcon :percentage="80" /> -->
          </GlassBox>
        </div>
      </div>

      <div class="Controls-Left">
        <GlassBox title="速度" glass noMargin white>
          <span style="font-size: 20px">{{ options.speed }}</span
          >&nbsp;m/s
        </GlassBox>
        <GlassBox title="海拔" glass noMargin white>
          <span style="font-size: 20px">{{ options.altitude }}</span>
        </GlassBox>
        <GlassBox title="风速" glass noMargin white>
          <span style="font-size: 20px">{{ options.wind }}</span
          >&nbsp;m/s
        </GlassBox>
      </div>
    </div>
  </div>
</template>

<style>
.Controls-Left .GlassBox {
  padding: 0.5rem 0.5rem;

  width: 100px;
}

.Controls-Left {
  position: absolute;
  display: flex;

  height: 70%;
  bottom: 1rem;

  gap: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.Controls-Top {
  display: flex;

  height: 30px;

  justify-content: space-between;
  align-items: center;
}

.RealView-Controls {
  z-index: 10;
  position: absolute;
  padding: 1rem;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
}

.DisasterRealView .BackgroundImage img,
.DisasterRealView .BackgroundImage video {
  width: 100%;
  height: 100%;

  object-fit: cover;

  /* transform: scale(1.25); */

  /* filter: brightness(95%); */
  border-radius: 12px;
}

.DisasterRealView .BackgroundImage {
  z-index: 1;
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;
  border-radius: 12px;
}

.DisasterRealView .BackgroundImage.filter {
  z-index: 0;
  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: unset;
  filter: blur(50px);
}

.DisasterRealView .BackgroundImage.filter img,
.DisasterRealView .BackgroundImage.filter video {
  transform: scale(1.0125) translateY(5%);
}

.DisasterRealView {
  position: relative;

  height: 400px;

  border-radius: 12px;
  border: 2px solid #2d342f80;
}
</style>
