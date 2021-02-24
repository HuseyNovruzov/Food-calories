<template>
  <div class="container-lgreg" v-bind:class="[(this.type !== 'login' && this.type !== 'register') ? 'display_none' : '']">
    <div class="welcome">
      <!-- <div class="box" v-bind:style="[(this.type === 'login') ? {'transform': 'translate(0%)'} : {'transform': 'translate(80%)'}]"> -->
        <div class="box" v-bind:class="[(this.type === 'login') ? 'transform_box_login' : 'transform_box_register']">
        <div class="signup" v-if="type === 'register'">
          <h1>register</h1>
          <form autocomplete="off">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button type="submit" class="button submit">create account</button>
            <router-link to="/account/login" class="mobile_change">do you have account then click</router-link>
          </form>
        </div>
        <div class="signin" v-if="type === 'login'">
          <h1>sign in</h1>
          <form class="more-padding" autocomplete="off">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <div class="checkbox">
              <input type="checkbox" id="remember" /><label for="remember"
                >remember me</label
              >
            </div>
            <button type="submit" class="button submit">login</button>
            <router-link to="/account/register" class="mobile_change">if you don't have account then click</router-link>
          </form>
        </div>
      </div>
      <div class="leftbox">
        <img
          class="img_for_box"
          src="@/assets/Login.svg"
          alt="login"
        />
        <p class="account">have an account?</p>
        <router-link to="/account/login" class="button change">login</router-link>
      </div>
      <div class="rightbox">
        <img
          class="img_for_box"
          src="@/assets/Sign_in.svg"
          alt="fruit"
        />
        <p class="account">don't have an account?</p>
        <router-link to="/account/register" class="button change">sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style>
.login_page_image {
  background-image: url('https://www.naturesproduce.com/wp-content/uploads/2018/09/Backgroud-img.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}
/* div box styling */
.container-lgreg {
  margin: auto;
  width: 650px;
  height: 550px;
  position: relative;
}

.container-lgreg .welcome {
  background: #3d5afe;
  width: 650px;
  height: 415px;
  position: absolute;
  top: 25%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.container-lgreg .box {
  position: absolute;
  top: -10%;
  left: 5%;
  background: #1a237e;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  z-index: 2;
}

.leftbox,
.rightbox {
  height: 100%;
  position: absolute;
  width: 50%;
  transition: 1s all ease;
}

.leftbox {
  left: -2%;
}

.rightbox {
  right: -2%;
}

/* font & button styling */
.container-lgreg h1 {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin-top: 95px;
  text-transform: uppercase;
  color: #f6f6f6;
  font-size: 2em;
  letter-spacing: 8px;
}

.container-lgreg .desc {
  margin-top: 8px;
}

.container-lgreg .account {
  margin-top: 70%;
  font-size: 12px;
  text-align: center;
}

.img_for_box {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
}


.container-lgreg button {
  padding: 12px;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  border-radius: 10px;
  font-weight: bold;
  margin: auto;
  outline: none;
  display: block;
}
.container-lgreg button:hover {
  color: #3d5afe;;
}

.container-lgreg .button {
  padding: 12px;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  border-radius: 8px;
  border:none;
  text-decoration: none;
  margin: auto;
  outline: none;
  display: block;
  margin-top: 3%;
  background: white;
  color: black;
}

.container-lgreg .change {
    width: 100px;
    margin-top: 10px;
    text-align: center;
}
/* form styling */
.container-lgreg form {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7px;
}

.container-lgreg .more-padding {
  padding-top: 35px;
}
.container-lgreg .more-padding input {
  padding: 12px;
}
.container-lgreg .more-padding .submit {
  margin-top: 45px;
}

.container-lgreg .submit {
  margin-top: 25px;
  padding: 12px;
  background:white;
}

.container-lgreg input {
  width: 65%;
  border: none;
  padding: 9px;
  margin: 7px;
}
.container-lgreg input::placeholder {
  color: black;
  font-weight: 400;
}
.container-lgreg input:focus {
  outline: none;
}
.container-lgreg input:focus::placeholder {
  opacity: 0;
}

.container-lgreg label {
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 0.8em;
  letter-spacing: 1px;
}

.container-lgreg .checkbox {
  display: inline;
  white-space: nowrap;
  position: relative;
  left: -62px;
  top: 5px;
}

@media screen and (max-width: 700px) {
  .container-lgreg .welcome,.container-lgreg {
    max-width: 100%;
  }
  .container-lgreg .box {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    max-width: 350px;
  }
  .rightbox, .leftbox {
    display: none;
  }
  .transform_box_login, .transform_box_register {
    transform: translate(0%) !important;
  }
  .mobile_change {
    display: block !important;
    color:gray; 
    font-size:14px;
    margin-top:5px
  }
}
.transform_box_login {
  transform: translate(0%);
}
.transform_box_register {
  transform: translate(80%);
}
.mobile_change {
  display: none;
}
.display_none {
  display: none;
}
</style>
