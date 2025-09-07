<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <IndexList
      :data="singers"
      @select="selectSinger"
    />
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component
          :is="Component"
          :data="selectedSinger"
        />
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import IndexList from '@/components/base/index-list/index-list'
import { getSingerList } from '@/service/singer.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant.js'
const router = useRouter()

const singers = ref([])

const selectedSinger = ref(null)

onMounted(async () => {
  const res = await getSingerList()
  singers.value = res.singers
})
const selectSinger = (singer) => {
  selectedSinger.value = singer
  cacheSinger(singer)
  router.push({
    path: `/singer/${singer.mid}`
  })
}
function cacheSinger(singer) {
  storage.session.set(SINGER_KEY, singer)
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
