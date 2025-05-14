<template>
  <Scroll
    class="index-list"
    :probe-type="3"
    @scroll="onScroll"
    ref="scrollRef"
  >
    <ul ref="groupRef">
      <li
        v-for="item in data"
        :key="item.title"
        class="group"
      >
        <h2 class="title">{{ item.title }}</h2>
        <!-- 每个title下的歌手list -->
        <ul>
          <li
            v-for="singer in item.list"
            :key="singer.id"
            class="singer-item"
            @click="onItemClick(singer)"
          >
            <img
              class="avatar"
              v-lazy="singer.pic"
            />
            <span class="name">{{ singer.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!-- fixed层 -->
    <div
      v-show="fixedTitle"
      class="fixed"
    >
      <div class="fixed-title">{{ fixedTitle }}</div>
    </div>
  </Scroll>
</template>

<script setup>
import Scroll from '@/components/base/scroll/scroll'
import { defineProps, defineEmits } from 'vue'
import useFixed from './use-fixed.js'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
const { groupRef, onScroll, fixedTitle } = useFixed(props)

const emit = defineEmits(['select'])
/**
 * 点击后触发select事件
 */
const onItemClick = (singer) => {
  emit('select', singer)
  console.log(singer)
}
</script>

<style scoped lang="scss">
.index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .group {
    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .singer-item {
      display: flex;
      align-items: center;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        background: $color-highlight-background;
      }
    }
  }
  .fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }
}
</style>
