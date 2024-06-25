<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const canvas = ref(null)
let chartInstance = null

onMounted(() => {
  chartInstance = new Chart(canvas.value, {
    type: 'doughnut',
    data: {
      labels: ['重度污染', '中度污染', '轻度污染', '良', '优'],
      datasets: [{
        label: 'My First Dataset',
        data: [100, 50, 200, 500, 150],
        backgroundColor: ['rgba(0, 0, 255, 0.3)', 'rgba(0, 0, 255, 0.66)', 'rgba(0, 0, 255, 1)', 'rgba(0, 255, 255, 0.8)', 'rgba(0, 255, 0, 0.75)'],
        hoverOffset: 4
      }]
    },
    options: {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      plugins: {
        title: {
          display: true,
          text: '昨日空气指数报告',
          padding: {
            bottom: 10
          }
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 6,
            boxHeight: 6,
            font: {
              size: 10
            }
          },
        }
      },
      cutout: '65%',
      radius: '90%'
    }
  })
})
</script>

<template>
  <div class="container">
    <div class="img">
      <span>当前监测区域</span>
      <img src="../../assets/province.png" alt="当前监测区域">
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.01);
  overflow: hidden;
}
.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  overflow: hidden;
}
.canvas {

  height: 50vh;
}
</style>