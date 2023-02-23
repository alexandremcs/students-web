<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="app">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app{
  width: 100vw;
  height: 100vh;
}
.side-bar {
  float: left;
  width: 240px;
  height: 100vh;
}
.router-view {
  float: left;
  width: calc(100% - 240px);
  height: 100vh;
  background-color: #f7f7f7;
}
</style>
