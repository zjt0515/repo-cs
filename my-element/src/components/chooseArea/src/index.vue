<template>
  <div>
    <h2>省市选择器</h2>
    <div class="flex flex-wrap gap-4 items-center">
      <!-- 省 -->
      <el-select v-model="selectedProvince">
        <el-option v-for="(item, index) in provinces" :key="index" :label="item"> </el-option>
      </el-select>
      <!--市 -->
      <el-select v-model="selectedCity" placeholder="Select">
        <!-- <el-option v-for="item in " :key=""></el-option> -->
      </el-select>
      <!-- 区 -->
      <el-select v-model="selectedArea" placeholder="Select">
        <!-- <el-option v-for="item in " :key=""></el-option> -->
      </el-select>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import allAreas from '../../../lib/pca.json'
const provinces = Object.keys(allAreas)
const areas = ref(allAreas)
const selectedProvince = ref<string>("")
const selectedCity = ref<string>("")
const selectedArea = ref<string>("")
console.log(areas.value)

</script>

<style scoped></style>