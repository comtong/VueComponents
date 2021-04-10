<template>
  <div id="app">
    <!-- <div id="nav"></div> -->
    <router-view />
  </div>
</template>

<style>
body {
  font-size: 16px;
}

body,
html,
#app {
  /*防止height：100%失效*/
  height: 100%;
}

body {
  background-color: #f8f8f8;
  line-height: 1.6;
  font-family: -apple-system-font, "Helvetica Neue", sans-serif;
  color: #515a6e;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
</style>
