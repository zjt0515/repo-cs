<template>
  <mobile-navigation-vue v-if="isMobileTerminal" :data="categories" />

</template>

<script setup>
import { getCategory } from '@/api/category';
import mobileNavigationVue from './mobile/index.vue'
import { onMounted, ref } from 'vue';
import { isMobileTerminal } from '@/utils/flexible';
import { ALL_CATEGORY_ITEM } from '@/constants';

const categories = ref([])
const getCategoryData = async () => {
  const data = await getCategory()
  categories.value = data.categorys
  categories.value.unshift(ALL_CATEGORY_ITEM)
}
onMounted(() => {
  getCategoryData()
})

</script>


<style lang="scss" scoped></style>
