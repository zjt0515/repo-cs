<template>
  <div
    class="suggest"
    v-loading:[loadingText]="loading"
    v-no-result:[noResultText]="hasResult"
  >
    <div class="suggest-list">
      <li
        class="suggest-item"
        v-if="singer"
      >
        <div class="icon"><i class="icon-mine"></i></div>
        <div class="name">
          <p class="text">{{ singer.name }}</p>
        </div>
      </li>
      <!-- 歌手-歌曲 -->
      <li
        class="suuggest-item"
        v-for="song in songs"
        :key="song.id"
      >
        <div class="icon"><i class="icon-music"></i></div>
        <div class="name">
          <p class="text">{{ song.singer }} -{{ song.name }}</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script setup>
import { search } from '@/service/search'
import { processSongs } from '@/service/song'
import { ref, watch, defineProps, computed } from 'vue'
const props = defineProps({
  query: String,
  showSinger: {
    type: Boolean,
    default: true
  }
})

const singer = ref(null)
const songs = ref([])
const hasMore = ref(true)
const page = ref(1)

const loadingText = ref('')
const noResultText = ref('抱歉, 搜不到')

const loading = computed(() => !singer.value && !songs.value.length)

const hasResult = computed(() => {
  // singer和 songs数组都为空 hasmore为false
  return !singer.value && !songs.value.length && !hasMore.value
})

watch(
  () => props.query,
  async (newQuery) => {
    if (!newQuery) return
    await searchFirst()
  }
)
// 首次搜索，初始化
async function searchFirst() {
  page.value = 1
  songs.value = []
  singer.value = null
  hasMore.value = true
  const res = await search(props.query, page.value, props.showSinger)

  songs.value = await processSongs(res.songs)
  singer.value = res.singer
  hasMore.value = res.hasMore
}
</script>

<style lang="scss" scoped></style>
