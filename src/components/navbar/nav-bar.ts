import DisasterViewVue from "../../views/disaster/DisasterView.vue";
import ConstructionViewVue from "../../views/ConstructionView.vue";
import DataView from "../../views/data/DataView.vue";
import VideoView from '../../views/video/VideoView.vue';
import SellView from '../../views/sell/SellView.vue'

export default [
  {
    name: "灾害巡检预警",
    normalize: true,
    comp: DisasterViewVue,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M240 127.62a80 80 0 0 1-80 80H72A56 56 0 1 1 85.92 97.36v.1A80 80 0 0 1 240 127.62" opacity=".2"/><path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176m0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0a72 72 0 1 1 72 72m-8-72V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></g></svg>',
  },
  {
    name: "施工巡检预警",
    normalize: true,
    comp: ConstructionViewVue,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91" opacity=".2"/><path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></g></svg>',
  },
  {
    name: "数据监测平台",
    comp: DataView,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor" stroke="currentColor" stroke-width="20"><rect x="30" y="30" rx="30" ry="30" width="180" height="200" fill-opacity=".2"/><path d="M64 80 h110 M64 125 h110 M64 170 h110"/></g></svg>',
  },
  {
    name: "视频详情浏览",
    comp: VideoView,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm12.553 1.106A1 1 0 0 0 14 8v4a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 18 13V7a1 1 0 0 0-1.447-.894z"/></svg>',
  },
  {
    name: "平台销售服务",
    comp: SellView,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><svg/>'
  }
];