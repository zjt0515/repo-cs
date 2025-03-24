<template>
  <div class="clearFloat">
    <div class="div1 clearfix">
      <p>父元素div1</p>
      div1
      <div class="div2">浮动元素div2</div>
      <!-- <div class="clear">(空的清除浮动元素)</div> -->
    </div>
    <p>一段文字</p>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.div1 {
  width: 200px;
  border: 1px solid #000;
  // bfc清除浮动
  // overflow: hidden;
}

.div2 {
  // 浮动
  float: left;
  width: 100px;
  height: 100px;
  background-color: green;
}

// 让clear元素清除div2的左浮动
.clear {
  clear: left;
  background-color: yellow;
}

.clearfix::after {
  content: '伪元素';
  display: block;
  clear: left;
}
</style>