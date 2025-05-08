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
import { useRoute, useRouter } from 'vue-router'
import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant.js'
// import { processSongs } from '@/service/song.js'
const props = defineProps({
  singer: Object
})
const songs = ref([])
const route = useRoute()
const router = useRouter()

const computedSinger = computed(() => {
  let ret = null
  const singer = props.singer
  if (singer) {
    ret = singer
  } else {
    const cachedSinger = storage.session.get(SINGER_KEY)
    if (cachedSinger && cachedSinger.mid === route.params.id) {
      ret = cachedSinger
    }
  }
  return ret
})

// 从singer获取对应的title和pic
// 为什么不直接绑定singer.title/singer.pic
const title = computed(() => {
  const singer = computedSinger.value
  return singer && singer.name
})
const pic = computed(() => {
  const singer = computedSinger.value
  return singer && singer.pic
})

onMounted(async () => {
  console.log('sginer-detail加载')
  console.log(computedSinger.value)
  if (!computedSinger.value) {
    const path = route.matched[0].path
    router.push({ path })
    return
  }
  const res = await getSingerDetail(computedSinger.value)
  songs.value = await processSongs(res.songs)
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
