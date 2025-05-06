<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <IndexList
      :data="singers"
      @select="selectSinger"
    ></IndexList>
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>
<script setup>
import IndexList from '@/components/base/index-list/index-list'
import { getSingerList } from '@/service/singer.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const singers = ref([])

const selectedSinger = ref(null)

onMounted(async () => {
  const res = await getSingerList()
  singers.value = res.singers
})
const selectSinger = (singer) => {
  selectedSinger.value = singer
  router.push({
    path: `/singer/${singer.mid}`
  })
}
</script>
<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
