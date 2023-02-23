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
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/signup">SignUp</RouterLink>
      </nav>
    </div>
  </header>-->
</template>

<style scoped>
.app {
  display: block;
  width: 100vw;
  height: 100vh;
}
.router-view {
  position: absolute;
  top: 20px;
  left: 270px;
}
</style>
