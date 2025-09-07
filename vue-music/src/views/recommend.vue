<template>
  <div
    class="recommend"
    v-loading="loading"
  >
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider
          v-if="sliders.length"
          :sliders="sliders"
        ></slider>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommend-list">
      <h1
        class="list-title"
        v-show="!loading"
      >
        热门歌单推荐
      </h1>
      <ul>
        <li
          class="item"
          v-for="item in albums"
          :key="item.id"
          @click="selectItem(item)"
        >
          <div class="icon">
            <img
              width="60"
              height="60"
              :src="item.pic"
            />
          </div>
          <div class="text">
            <h2 class="name">
              {{ item.username }}
            </h2>
            <p class="title">
              {{ item.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 渲染二级视图 -->
    <router-view v-slot="{ Component }">
      <transition
        appear
        name="slide"
      >
        <component
          :is="Component"
          :data="selectedAlbum"
        />
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import { getRecommend } from '@/service/recommend.js'
import slider from '@/components/base/slider/slider.vue'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import storage from 'good-storage'
import { ALBUM_KEY } from '@/assets/js/constant'

const sliders = ref([])
const albums = ref([])
const selectedAlbum = ref(null)
const router = useRouter()

const loading = computed(() => {
  return !sliders.value && !albums.value
})
onMounted(async () => {
  const result = await getRecommend()
  sliders.value = result.sliders
  albums.value = result.albums
  console.log(albums.value)
  loading.value = false
})

function selectItem(album) {
  selectedAlbum.value = album
  // 解决刷新丢失问题
  cacheAlbum(album)
  router.push({ path: `/recommend/${album.id}` })
}

function cacheAlbum(album) {
  storage.session.set(ALBUM_KEY, album)
}
</script>
<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      justify-content: center;
      padding: 0px 20px 20px 25px;
      .icon {
        width: 60px;
        flex: 0 0 60px;
        padding-right: 20px;
      }

      .text {
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .name {
        color: $color-text;
        margin-bottom: 10px;
      }
      .title {
        color: $color-text-d;
      }
    }
  }
}
</style>
