<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
    ></music-list>
  </div>
</template>

<script setup>
import { getSingerDetail } from '@/service/singer.js'
import { processSongs } from '@/service/song.js'
import { defineProps, onMounted, ref, computed } from 'vue'
import MusicList from '@/components/music-list/music-list'
// import { processSongs } from '@/service/song.js'
const props = defineProps({
  singer: Object
})
const songs = ref([])

onMounted(async () => {
  // console.log(`props.singer:${props.singer}`)
  const res = await getSingerDetail(props.singer)
  console.log(res)
  songs.value = await processSongs(res.songs)
})

// 从singer获取对应的title和pic
// 为什么不直接绑定singer.title/singer.pic
const title = computed(() => {
  return props.singer && props.singer.title
})
const pic = computed(() => {
  return props.singer && props.singer.pic
})
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
