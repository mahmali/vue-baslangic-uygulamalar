<template>
  <div id="app">
    <p>Data mesaj: {{msg}}</p>
    <p v-once>Data mesaj: {{msg}}</p>
    <p>Data mesaj "v-once" kullanımı: {{msg}}</p>
    <p>Methods hello metodu{{deneme()}}</p>
    <p><a v-bind:href="google">link</a></p>
    <a href="denemelink">denemelink</a>
    <br>
    <button v-on:click="msg3('mali')">Alert Göster</button>
    <br>
    <button v-on:click="arttır(33)">arttır</button> <p>{{sayi}}</p> <button v-on:click="azalt()">azalt</button>
    <p v-on:mousemove="koordinat(2,$event)">mause kordinat çalıştır</p> <p>{{x}} {{y}}</p>
    <p>{{output}}</p>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'Calismasayfasi',
  data () {
    return {
      msg: 'data içindeki msg ',
      aciklama: 'bu bir harekettır',
      google: 'https://www.google.com.tr/?hl=tr',
      denemelink: 'https://www.google.com.tr/?hl=tr',
      sayi: 1,
      x: 0,
      y: 0
    }
  },
  methods: {
    deneme: function () {
      this.google = 'mesaj değiştirildi'
      return this.msg
    },
    msg3: function (mali) {
      alert(mali)
    },
    arttır: function (sayi) {
      this.sayi += sayi
    },
    azalt: function () {
      this.sayi--
    },
    koordinat: function (sayi2, event) {
      this.x = event.clientX
      this.y = event.clientY
      // alert(sayi2)
    }
  },
  computed: {
    output: function () {
      return 'computed output çıktısı'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
