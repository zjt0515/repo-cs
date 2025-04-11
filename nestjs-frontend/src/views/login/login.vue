<template>
  <div>
    登陆
  </div>
</template>

<script setup lang="ts">
import axios from '@/utils/axios.ts'

const res = await axios.get('/user')


</script>

<style scoped>

</style>