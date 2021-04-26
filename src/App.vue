<template>
  <div id="app">
    <BarDrawer/>
  <router-view></router-view>
  </div>
</template>

<script>
import BarDrawer from './components/bar_drawer/Bar_drawer.vue'

export default {
  name: 'App',
  components: {
    BarDrawer
  },
    data: () => ({

    }),

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>