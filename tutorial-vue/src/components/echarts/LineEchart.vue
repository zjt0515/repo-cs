<template>
  <div>
    <canvas id="can1" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';

onMounted(() => {
  const targetdom = document.getElementById('can1')

  const echart1 = echarts.init(targetdom, null, {
    width: 300,
    height: 300,
    devicePixelRatio: window.devicePixelRatio,

  })
  const options = {
    xAxis: {
      data: [1, 2, 3, 4, 5]
    },
    yAxis: {

    },
    series: [
      // 每个对象都代表一个图表
      {
        type: 'line',
        data: [10, 20, 30]
      },
      {
        type: 'line',
        data: [40, 50, 60]
      }
    ]
  }
  echart1.setOption(options)
}
)
</script>

<style scoped></style>
