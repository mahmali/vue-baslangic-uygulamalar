<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/page/header.vue'

export default {
  name: 'App',
  components: {
    appheader: header
  }
}
</script>

<style>

</style>
