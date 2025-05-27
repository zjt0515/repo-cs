<template>
  <div>
    {{ props.item.desc }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: Object,
})
</script>
<style scoped></style>
