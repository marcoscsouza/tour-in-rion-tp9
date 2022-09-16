<template>
  <MyNav/>
  <MyFooter/>
</template>

<script>

import MyFooter from './components/MyFooter.vue'
import MyNav from './components/MyNav.vue'
export default {
  components:{
    MyNav, MyFooter
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
