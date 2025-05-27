<template>
  <div class="item">
    <ul>
      <li v-for="item in item" :key="item.id" @click="onItemClick(item)">
        <div class="content">
          <h2 class="text">{{ item.name }}</h2>
        </div>
      </li>
    </ul>
    <div>
      <router-view :item="selectedItem"></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const item = [
  {
    id: 1,
    name: 'a',
    desc: 'aaaaa',
  },
  {
    id: 2,
    name: 'b',
    desc: 'bbbbb',
  },
  {
    id: 3,
    name: 'a',
    desc: 'ccccc',
  },
]
const selectedItem = ref(null)

const router = useRouter()
function onItemClick(item) {
  selectedItem.value = item
  router.push({ path: `/item/${item.id}` })
}
</script>

<style scoped></style>
