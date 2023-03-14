<template>
  <div class="container">
    <div class="section">
      <div class="header-icon">
        <img src="../assets/shop/icon-site.svg" width="1300">
      </div>
      <div class="sepet">
        <p class="txt-header">Sepetim</p>
        <p class="urun">(1 Ürün))</p>
        <p>yeni commit işlemi</p>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'MahmaliShop'
}
</script>

<style scoped>
.container {
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
}
.section{
  display: flex;
  flex-direction: column;
  width: 1500px;
  height: 800px;

  background: #FFFFFF;
  box-shadow: 10px 35px 48px rgba(0, 0, 0, 0.09);
  border-radius: 70px;
  margin: 50px;
}
.header-icon{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 70px;
}
.txt-header{
  font-family: Inter;
  font-size: 40px;
  margin-left: 100px;
}
.sepet{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.urun{
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: 'Inter';
  font-size: 17px;
  color: #F2AB3C;
}
</style>
