<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import calismasayfasi from './components/Calismasayfasi.vue'

export default {
  name: 'App',
  components: {
    calisma: calismasayfasi
  }
}
</script>

<style>

</style>
