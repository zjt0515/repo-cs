<template>
  <div class="search-input">
    <i class="icon-search"></i>
    <input
      class="input-inner"
      v-model="query"
      :placeholder="placeholder"
    />
    <!-- clear icon -->
    <i
      v-show="query"
      class="icon-dismiss"
      @click="clear"
    ></i>
  </div>
</template>

<script setup>
import { debounce } from 'throttle-debounce'
import { defineProps, watch, defineEmits, ref, onMounted } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: '搜索歌曲、歌手'
  }
})
const query = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])

// 监听子组件query修改时，向外传出新的query
watch(
  query,
  debounce(300, (newQuery) => {
    emit('update:modelValue', newQuery.trim())
    console.log(`child's query changed: ${query.value}`)
  })
)

// props变化时，修改子组件的ref
watch(
  () => props.modelValue,
  (newModelValue) => {
    console.log(`parent's query changed: ${newModelValue}`)
    query.value = newModelValue
  }
)

onMounted(() => {})

function clear() {
  query.value = ''
}
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 32px;
  background: $color-highlight-background;
  border-radius: 6px;
  .icon-search {
    font-size: 24px;
    color: $color-text-d;
  }
  .input-inner {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    background: $color-highlight-background;
    color: $color-text;
    font-size: $font-size-medium;
    outline: 0;
    &::placeholder {
      color: $color-text-d;
    }
  }
  .icon-dismiss {
    font-size: 16px;
    color: $color-text-d;
  }
}
</style>
