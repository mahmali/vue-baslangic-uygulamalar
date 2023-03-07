<template>
  <div class="container">
    <div class="wrapper">
      <div class="img">
        <img id="img" src="../assets/singin/İcon 124px.png" height="124" width="124"/>
      </div>
      <p id="h1" style="font-family: Poppins">Yeni Bir Kullanıcı Oluşturun</p>
      <div class="input-user">
        <img id="icon" src="../assets/singin/user-icon.svg" width="24" height="24" />
        <input style="color: white" type="text">
      </div>
      <div class="input-user">
        <img id="icon" src="../assets/singin/email-icon.svg" width="24" height="24" />
        <input style="color: white" type="email">
      </div>
      <div class="input-user">
        <img id="icon" src="../assets/singin/password-icon.svg" width="24" height="24" />
        <input style="color: white" type="password">
      </div>
      <p id="txt-ks">Kaydolurken Kullanım Şartlarımızı ve Gizlilik Politikamızı
        kabul edersiniz.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Singin'
}
</script>
<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
  background-color: #2c3e50;
  background: url(../assets/singin/bg-black.png) no-repeat;
}
.wrapper{
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 720px;
  border-radius: 20px;
  align-items: center;
  background: url(../assets/singin/bg-opacity.svg) no-repeat;
}
#img{
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
}
#icon{
  margin-top: 13px;
  margin-left: 13px;
}
#h1{
  color: white;
  font-size: 28px;
  font-family: Poppins;
  font-style: initial;
  margin-bottom: 40px;
}
input{
  opacity: 1;
  background-color: black;
  position: absolute;
  height: 47px;
  width: 350px;
  outline: none;
  box-shadow: none;
  border:none;
  border-radius: 30px;
  margin-left: 20px;
  font-size: 26px;
}
.input-user{
  background-color: black;
  box-sizing: border-box;
  width: 429px;
  height: 51px;
  border:0.3px solid white;
  border-radius: 35px;
  margin-bottom: 10px;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: none;
  border:none;
}
input[type="text"]:focus:hover {
  outline: none;
  box-shadow: none;
  border:none;
  border-radius:none;
  color: white;
}
#txt-ks{
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: white;
}
</style>
