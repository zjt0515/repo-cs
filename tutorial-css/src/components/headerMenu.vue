<template>
  <div class="headerLayout">
    <div class="site-name">瓦洛兰特小涛查</div>
    <div class="logo">
      <img src="../assets/valorant.svg" alt="" />
    </div>
    <div class="nav">
      <router-link
        class="item"
        v-for="route in routes"
        :to="{ name: route?.name }"
        :key="route?.path"
      >
        <p class="nav-name">
          {{ route.meta?.name }}
        </p>
        <div v-if="route.children" class="childRoutes">
          <router-link
            class="item"
            v-for="childRoute in route.children"
            :to="{ name: childRoute?.name }"
            :key="childRoute?.path"
          >
            <p class="nav-name">
              {{ childRoute.meta?.name }}
            </p>
          </router-link>
        </div>
      </router-link>
    </div>
    <div class="register">
      <router-link :to="{ name: 'register' }">注册</router-link>
    </div>
    <div class="play">
      <router-link :to="{ name: 'login' }">play </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
</script>

<style scoped lang="scss">
.headerLayout {
  display: flex;
  /* justify-content: center; */
  align-items: center;

  padding: 0px 48px;
  height: 72px;
  line-height: 36px;

  background-color: #111;

  .site-name {
    color: white;
    margin-right: 12px;
  }
  .logo {
    display: flex;
    img {
      height: 32px;
    }
  }
  .nav {
    flex-grow: 1;

    display: flex;
  }
}

.item {
  color: white;
  /* width: 48px; */
  padding: 0px 12px;
  margin: 0px 6px;
  position: relative;

  text-decoration: none;
  .nav-name {
    padding: 0px 12px;
    border-radius: 10px;
    &:hover {
      color: rgb(255, 70, 85);

      background-color: #333333;
    }
  }
  .childRoutes {
    display: none;
    position: absolute;
    background-color: #333333;
    top: 50px;
  }
}
</style>
