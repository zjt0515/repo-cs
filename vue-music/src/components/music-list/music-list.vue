<!-- 歌手详情、热名歌单列表、排行榜歌单-->
<template>
  <div class="music-list">
    <!-- 返回按钮 -->
    <div
      class="back"
      @click="goBack"
    >
      <i class="icon-back"></i>
    </div>
    <!-- 标题 -->
    <h1 class="title">{{ props.title }}</h1>
    <!-- 背景图片 -->
    <div
      class="bg-image"
      :style="bgImageStyle"
      ref="bgImage"
    >
      <!-- 播放按钮 -->
      <div
        class="play-btn-wrapper"
        :style="playBtnStyle"
      >
        <div
          v-show="songs.length > 0"
          class="play-btn"
          @click="random"
        >
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>

      <!-- 图片模糊层 -->
      <div
        class="filter"
        :style="filterStyle"
      ></div>
    </div>
    <!-- 歌曲滚动条 -->
    <Scroll
      class="list"
      :style="scrollStyle"
      :probe-type="3"
      @scroll="onScroll"
    >
      <div class="song-list-wrapper">
        <song-list :songs="props.songs"> </song-list>
      </div>
    </Scroll>
  </div>
</template>

<script setup>
import SongList from '@/components/base/song-list/song-list'
import Scroll from '@/components/base/scroll/scroll'
import { defineProps, computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  songs: {
    type: Array,
    default() {
      return []
    }
  },
  title: String,
  pic: String
})

const scrollY = ref(0)
const imageHeight = ref(0)
const bgImage = ref(null)
const router = useRouter()
//
const RESERVED_HEIGHT = 40
// 最大滚动距离
const maxTranslateY = ref(0)

const scrollStyle = computed(() => {
  return { top: `${imageHeight.value}px` }
})
const bgImageStyle = computed(() => {
  const currentScrollY = scrollY.value
  let zIndex = 0
  let paddingTop = '70%'
  let height = 0
  // iphone兼容
  let translateZ = 0

  if (currentScrollY > maxTranslateY.value) {
    zIndex = 10
    paddingTop = 0
    height = `${RESERVED_HEIGHT}px`
    translateZ = 1
  }

  // 下拉放大效果
  let scale = 1
  if (currentScrollY < 0) {
    scale = 1 + Math.abs(currentScrollY / imageHeight.value)
  }

  return {
    zIndex,
    paddingTop,
    height,
    backgroundImage: `url(${props.pic})`,
    transform: `scale(${scale})translateZ(${translateZ}px)`
  }
})

const filterStyle = computed(() => {
  let blur = 0
  const currentScrollY = scrollY.value
  const currentImageHeight = imageHeight.value
  if (currentScrollY >= 0) {
    blur = Math.min(maxTranslateY.value / currentImageHeight, currentScrollY / currentImageHeight) * 20
  }
  return {
    backdropFilter: `blur(${blur}px)`
  }
})

const playBtnStyle = computed(() => {
  return {}
})

function onScroll(pos) {
  scrollY.value = -pos.y
}
function goBack() {
  router.back()
}

onMounted(() => {
  imageHeight.value = bgImage.value.clientHeight
  maxTranslateY.value = imageHeight.value - RESERVED_HEIGHT
})
</script>

<style lang="scss" scoped>
.music-list {
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 20;
    transform: translateZ(2px);
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    z-index: 20;
    transform: translateZ(2px);
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
  }
  .bg-image {
    position: relative;
    width: 100%;
    transform-origin: top;
    background-size: cover;
    .play-btn-wrapper {
      position: absolute;
      bottom: 20px;
      z-index: 10;
      width: 100%;
      .play-btn {
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
      }
      .icon-play {
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
        font-size: $font-size-medium-x;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        font-size: $font-size-small;
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    .song-list-wrapper {
      padding: 20px 30px;
      background: $color-background;
    }
  }
}
</style>
