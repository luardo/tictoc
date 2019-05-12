<template>
  <div id="app">
    <TicToc/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TicToc from "./components/TicToc.vue";

export default {
  name: "app",
  components: {
    TicToc
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
