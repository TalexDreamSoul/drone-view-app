<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, Ticks } from 'chart.js/auto'
const canvas = ref(null);
let chartInstance = null;
let data = [75];
let labels = ['1'];

onMounted(() => {
  chartInstance = new Chart(canvas.value, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '空气质量分数',
        data: data,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 5,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '空气质量',
          font: {
            size: 14
          }
        },
        legend: {
          labels: {
            boxHeight: 0.1,
            boxWidth: 9,
            font: {
              size: 10
            }
          }
        },
        tooltip: {
          callbacks: {
            label: context => {
              let label = context.dataset.label || ''
              if (label) {
                label += '：'
              }
              label += context.parsed.y + ' 分'
              return label
            }
          }
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 10,
            font: {
              size: 10
            },
            callback: value => value + '分',
          },
          grid :{
            color: 'rbga(255, 255, 255, 1)'
          }
        },
        x: {
          ticks: {
            font: {
              size: 10
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0)'
          }
        }
      },
      elements: {
        line: {
          borderWidth: 1
        }
      }
    }
  });
});
setInterval(() => {
    const newData = Math.floor(Math.random() * 6) + 75;
    const newLabel = `${data.length + 1}`;
    data.push(newData);
    if (data.length > 60) {
      data.shift();
    }
    else
    {
      labels.push(newLabel);
    }
    chartInstance.update();
  }, 2000);
</script>

<template>
  <div class="chart_container">
    <canvas ref="canvas"/>
  </div>
</template>

<style scoped>
.chart_container {
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

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