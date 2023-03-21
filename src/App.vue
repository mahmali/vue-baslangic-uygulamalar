<template>
  <div id="app">
    <applist></applist>
    <appheader></appheader>
    <router-view></router-view>
  </div>
</template>

<script>

import header from './components/page/header.vue'
import list from './components/Portfolyo/List.vue'

export default {
  name: 'App',
  components: {
    appheader: header,
    applist: list
  }
}
</script>

<style>

</style>
