<script setup>
  import { Chart, Ticks } from 'chart.js/auto';
import { color } from 'chart.js/helpers';
  import { ref, onMounted, watch } from 'vue';

  const canvas = ref(null);
  let chartInstance = null;
  let data = [187, 489, 6, 32, 24, 58];

onMounted(() => {
  chartInstance = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels: ['O3', 'CO', 'SO2', 'NO2', 'PM2.5', 'PM10'],
      datasets: [{
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '污染气体（单位：μg/m3）',
          font: {
            size: 14
          }
        },
        legend: false
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          },
          ticks: {
            font: {
              size: 10
            }
          }
        },
        y: {
          grid: {
            color: 'rbga(255, 255, 255, 1)'
          },
          ticks: {
            font: {
              size: 10
            }
          }
        }
      }
    }
  });
});
setInterval(() => {
    const newData1 = Math.floor(Math.random() * 16) + 185;
    const newData2 = Math.floor(Math.random() * 16) + 485;
    const newData3 = Math.floor(Math.random() * 6);
    const newData4 = Math.floor(Math.random() * 6) + 30;
    const newData5 = Math.floor(Math.random() * 11) + 20;
    const newData6 = Math.floor(Math.random() * 11) + 55;
    const newdata = [newData1, newData2, newData3, newData4, newData5, newData6];
    for (let index = 0; index < data.length; index++) {
      data[index] = newdata[index];
    }
    chartInstance.update();
  }, 1000);

</script>

<template>
  <div class="chart_container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.chart_container {
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.01);
}
.canvas {
  display: flex;
  width: 80%;
  height: 50%;
  justify-content: center;
  align-items: center;
}
</style>