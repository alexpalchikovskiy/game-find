<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

* {
  -webkit-tap-highlight-color: transparent;
}
html, body, #app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
