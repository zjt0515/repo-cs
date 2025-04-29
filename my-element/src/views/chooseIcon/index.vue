<template>
  <div>
    <m-choose-icon :title="title" :visible="visible">

    </m-choose-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import mChooseIcon from '../../components/chooseIcon/src/index.vue'
let title = ref<string>("标题")
let visible = ref<boolean>(false)


</script>

<style scoped></style>