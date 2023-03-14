<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
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
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Worksheet',
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

</style>
