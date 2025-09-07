<template>
  <div>
    父元素div
    <p>
      字元素p
      <span>孙</span>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
  font-size: 40px;
  width: 10em; // 400px
}

p {
  font-size: 0.5em; // 20px

  width: 10em; // 200px
}

span {
  font-size: 0.5em; // 10px
  width: 10em; // 100px
}
</style>
