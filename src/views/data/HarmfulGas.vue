<script setup>
import { Chart, Ticks } from 'chart.js/auto';
import { ref, onMounted, watch } from 'vue';

const canvas = ref(null);
let chartInstance = null;
let data = [0, 0.01, 0.01, 0.02, 0.01];

onMounted(() => {
  chartInstance = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels: ['VOCs', '(WR)SO2', 'CH4', 'HCl', 'H2S'],
      datasets: [{
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      }]
    },
    options: {
      // responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '有害气体（单位：μg/m3）',
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
            stepSize: 0.005,
            font: {
              size: 10
            }
          }
          
        }
      }
    }
  });
});
</script>

<template>
  <div class="chart_container">
    <canvas ref="canvas"/>
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
  width: 80%;
  height: 50%;
  justify-content: center;
  align-items: center;
}
</style>