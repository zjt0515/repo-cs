<template>
  <div class="song-list">
    <ul>
      <li
        class="item"
        v-for="song in props.songs"
        :key="song.id"
        @click="selectSong(song, index)"
      >
        <!-- 排行榜歌单的song rank -->
        <div class="rank"></div>

        <div class="content">
          <h2 class="name">{{ song.name }}</h2>
          <p class="desc">{{ `${song.singer}·${song.album}` }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  songs: {
    type: Array,
    default() {
      return []
    }
  },
  rank: {
    type: Boolean
  }
})
const emit = defineEmits(['select'])
// 点击song，触发select事件
const selectSong = (song, index) => {
  emit('select', { song, index })
}
</script>

<style lang="scss" scoped>
.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: $font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 20px;
      text-align: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
        // &.icon0 {
        //   @include bg-image('first');
        // }
        // &.icon1 {
        //   @include bg-image('second');
        // }
        // &.icon2 {
        //   @include bg-image('third');
        // }
      }
      .text {
        color: $color-theme;
        font-size: $font-size-large;
      }
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>
