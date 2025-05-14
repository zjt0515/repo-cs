<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="tab in tabs"
      :to="tab.path"
      :key="tab.path"
    >
      <span class="tab-text">
        {{ tab.name }}
      </span>
    </router-link>
  </div>
</template>

<!-- <script setup lang="ts">
  import { ref } from 'vue'
  const tabs = ref([
    {
      name: '推荐',
      path: '/recommand'
    }
  ])
  </script> -->
<script>
export default {
  name: 'tab',
  data() {
    return {
      tabs: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/top-list'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-text {
      padding-bottom: 5px;
      color: $color-text-l;
    }

    &.router-link-active {
      .tab-text {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
