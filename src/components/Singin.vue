<template>
  <div class="container-fluid">
    <div class="col-md-12">
      <div class="row">
        <div class="wrapper">
          <div class="img">
            <img id="img" src="../assets/singin/İcon 124px.png" alt="#" height="124" width="124"/>
          </div>
          <p id="h1" >Yeni Bir Kullanıcı Oluşturun</p>
          <div class="input-user">
            <img id="icon" src="../assets/singin/user-icon.svg" width="24" height="24" alt="#" />
            <input style="color: white" type="text" placeholder="Kullanıcı Adı">
          </div>
          <div class="input-user">
            <img id="icon" src="../assets/singin/email-icon.svg" width="24" height="24" alt="#"/>
            <input style="color: white" type="email" placeholder="example@mail.com">
          </div>
          <div class="input-user">
            <img id="icon" src="../assets/singin/password-icon.svg" width="24" height="24" alt="#"/>
            <input id="input_Password" style="color: white" type="password" placeholder="password">
            <img id="eye" src="../assets/singin/eyelash.svg" width="24" height="24" alt="#">
          </div>
          <p id="txt-ks">Kaydolurken Kullanım Şartlarımızı ve Gizlilik Politikamızı
            kabul edersiniz.</p>
          <button id="btn_kayitol">Kayıt Ol</button>
          <div id="oturumacin">
            <p style="margin-right: 8px" id="txt-ks">Zaten hesabınız var mı?   </p>
            <a href="https://www.w3schools.com/tags/tag_link.asp">Oturum Açın</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Singin'
}
</script>
<style scoped>
#oturumacin{
  display: flex;
  align-items: center;
}
#oturumacin a{
  color: #FFFFFF;
}
.row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
}
.container-fluid{
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
  backdrop-filter: blur(5px);
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
  /*font-family: 'Gill Sans';*/
  font-style: normal;
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
  /*background-color: black;*/
  /*background: transparent;*/
  box-sizing: border-box;
  width: 429px;
  height: 51px;
  border:0.3px solid white;
  border-radius: 35px;
  margin-bottom: 10px;
}
.input-user input{
  background: transparent !important;
}
.input-user:focus ~img,
.input-user:valid ~img{
  top: -5px;
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
  /*border-radius:none;*/
  color: white;
}
#txt-ks{
  /*font-family: 'Helvetica';*/
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: white;
}
#txt-ks a{
  position: absolute;
}
#eye{
  margin-left: 340px;
}
.input-user #input_Password{
  width: 300px !important;
}
#btn_kayitol{
  box-sizing: border-box;

  width: 429px;
  height: 51px;
  left: 1035px;
  top: 764px;
  margin-top: 10px;

  background: #D9D9D9;
  border: 0.5px solid #FFFFFF;
  border-radius: 35px;

  /*font-family: 'Gill Sans';*/
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
}
#btn_kayitol:hover{
  background: transparent;
  color: white;
}
</style>
