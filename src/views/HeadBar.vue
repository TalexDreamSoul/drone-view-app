<script setup lang="ts">
// import Logo from '../assets/logo-removebg-preview.png'
// import { ipcRenderer } from "electron";

const ipcRenderer = window.ipcRenderer

defineProps<{
  modelValue?: boolean;
  name: string;
}>();

const controllers = [
  {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20v-2h16v2H4Z"/></svg>',
    click: () => ipcRenderer.send("minimize"),
    hover: "#F1F0E950",
  },
  {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"/></svg>',
    click: () => ipcRenderer.send("maximize"),
    hover: "#F1F0E950",
  },
  {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>',
    click: () => ipcRenderer.send("close"),
    hover: "#DD001B80",
  },
];
</script>

<template>
  <div class="HeadBar">
    <div class="HeadBar-Start">
      <!-- <span>
        <img :src="Logo" alt="logo" />
      </span> -->
      <!-- 无人机巡航场景监视系统 -->
    </div>

    <div class="HeadBar-Title">
      {{ name }}
      <!-- 自然灾害巡检智能预警 -->
      <!-- 施工作业巡检智能预警 -->
    </div>

    <div class="HeadBar-Controller">
      <div
        :style="`--hoverColor: ${item.hover}`"
        v-for="item in controllers"
        v-html="item.svg"
        @click="item.click"
      />
    </div>
  </div>
</template>

<style>
.HeadBar-Controller {
  display: flex;

  justify-content: flex-end;
  align-items: center;

  -webkit-app-region: no-drag;
}

.HeadBar-Controller div svg {
  position: relative;
  top: 2px;

  width: 28px;
  height: 24px;
}

.HeadBar-Controller div {
  &:hover {
    background-color: var(--hoverColor, red);
  }
  cursor: pointer;

  height: 28px;
}

.HeadBar-Start img {
  position: relative;

  width: 80px;
  height: 28px;
}

.HeadBar-Start span {
  display: inline-block;

  width: 25px;

  overflow: hidden;
}

.HeadBar-Start {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;

  opacity: 0.85;
  font-size: 14px;
}

.HeadBar {
  position: relative;
  padding-left: 1rem;
  /* padding-right: .25rem; */
  display: flex;

  top: 0;
  left: 0;

  width: 100%;
  height: 28px;

  align-items: center;
  justify-content: space-between;

  -webkit-app-region: drag;
  color: #fff;
  user-select: none;
  box-sizing: border-box;
  border-bottom: 1px solid #202324;
}
</style>
