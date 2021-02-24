<template>
  <div class="linkBox">
    <div class="logoBox">
      <div>Logo</div>
      <div
        class="hamburger-bg"
        :style="[
          isMenuOpen
            ? { 'background-color': 'transparent' }
            : { 'background-color': 'white' }
        ]"
      >
        <div
          :class="{ active: isMenuOpen }"
          class="hamburger"
          @click="openCloseMenu"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>

    <div :class="{ open: isMenuOpen }" class="overlay" id="overlay">
      <h1 style="color: white; margin-left: 20px">Logo</h1>
      <nav class="overlay-menu">
        <div class="accordion">
          <div class="accordion-collapse" id="analysis">
            <a href="#analysis" class="analysis">Analysis</a>
            <div class="accordion-collapse-content">
              <div class="inner-content">
                <div class="analysisDetailBox">
                  <img src="@/assets/chart.svg" />
                  <div class="analysisText">
                    <a href="#">Analysis</a>
                    <p>
                      You can notice your weekly nutrition analysis by graph
                      visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion collapse end -->
          <div class="accordion-collapse" id="api">
            <a href="#api" class="api"> Api </a>
            <div class="accordion-collapse-content">
              <div class="inner-content">
                <div class="apiDetailBox">
                  <img src="@/assets/apiDocumentation.svg" />
                  <div class="apiText">
                    <a href="#">Documentation</a>
                    <p>
                      You can notice your weekly nutrition analysis by graph
                      visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-collapse not-collapse">
            <a href="#">Feedback</a>
          </div>
          <div class="accordion-collapse not-collapse">
            <a href="#">Contact</a>
          </div>
          <div class="register-box">
            <router-link to="/account/register" class="sign-up">Sign Up</router-link>
            <router-link to="/account/login" class="login">Log In</router-link>
            <!-- <input type="button" value="Sign Up" class="sign-up" /> -->
            <!-- <input type="button" value="Log In" class="login" /> -->
          </div>
        </div>
      </nav>
    </div>

    <ul class="links">
      <li>
        <div>
          <a class="anaysisTitle hoverlink">Analysis</a>
          <div class="analysisDetailBox">
            <img src="@/assets/chart.svg" />
            <div class="analysisText">
              <a href="#">Analysis</a>
              <p>
                You can notice your weekly nutrition analysis by graph
                visualization.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div>
          <a class="apiTitle hoverlink">Api</a>
          <div class="apiDetailBox">
            <img src="@/assets/apiDocumentation.svg" />
            <div class="apiText">
              <a href="#">Documentation</a>
              <p>
                You can notice your weekly nutrition analysis by graph
                visualization.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li><a href="">Feedback</a></li>
      <li><a href="">Contact</a></li>
    </ul>

    <div class="registerBox">
      <!-- <input type="button" value="Sign Up" class="signUp" /> -->
      <router-link to="/account/register" class="signUp" >Sign Up</router-link>
      <router-link to="/account/login" class="logIn" >Log In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openCloseMenu: function() {
      if (!this.isMenuOpen) {
        document.body.classList.add("body-scroll-toggle");
      } else {
        document.body.classList.remove("body-scroll-toggle");
      }
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Roboto+Mono:wght@200&display=swap");

.linkBox {
  display: flex;
  align-items: center;
}
.logoBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  order: 1;
  height: inherit;
  width: 310px;
  color: #5908f0;
  font-size: 25px;
}

.hamburger-bg {
  position: fixed;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  z-index: 100;
}
.hamburger {
  display: none;
  cursor: pointer;
  position: relative;
  width: 28px;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.hamburger .line {
  margin-bottom: 4px;
  display: block;
  height: 4px;
  width: 4px;
  border-radius: 100px;
  background: #3d5afe;
}
.hamburger .line::after,
.hamburger .line::before {
  content: "";
  display: block;
  height: 4px;
  width: 4px;
  border-radius: 100px;
  background: #3d5afe;
  position: absolute;
  top: 0;
}
.hamburger .line::after {
  right: 0;
}
.hamburger .line::before {
  right: 12px;
}
.hamburger .line:nth-child(2)::after,
.hamburger .line:nth-child(2)::before {
  top: 8px;
}
.hamburger .line:nth-child(3)::after,
.hamburger .line:nth-child(3)::before {
  top: 16px;
}
.hamburger:hover .line {
  width: 100%;
}
.hamburger:hover .line:nth-child(2) {
  -webkit-transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  -ms-transition-delay: 0.1s;
  -o-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.hamburger:hover .line:nth-child(3) {
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.hamburger.active .line {
  width: 100%;
  background: white;
}
.hamburger.active .line::before,
.hamburger.active .line::after {
  opacity: 0;
}
.hamburger.active .line:nth-child(1) {
  -webkit-transform: translate(0, 8px) rotate(45deg);
  -moz-transform: translate(0, 8px) rotate(45deg);
  -o-transform: translate(0, 8px) rotate(45deg);
  -ms-transform: translate(0, 8px) rotate(45deg);
  transform: translate(0, 8px) rotate(45deg);
}
.hamburger.active .line:nth-child(2) {
  -webkit-transform: translate(0, 0) rotate(-45deg);
  -moz-transform: translate(0, 0) rotate(-45deg);
  -o-transform: translate(0, 0) rotate(-45deg);
  -ms-transform: translate(0, 0) rotate(-45deg);
  transform: translate(0, 0) rotate(-45deg);
}
.hamburger.active .line:nth-child(3) {
  opacity: 0;
}
.hamburger.active:hover .line:nth-child(2),
.hamburger.active:hover .line:nth-child(3) {
  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -ms-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}

* {
  -webkit-transition: 0.25s all ease;
  -moz-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}

/* -------------- */
.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  order: 2;
  width: 660px;
  list-style-type: none;
  height: inherit;
}
.links li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 100px;
  font-size: 18px;
  padding: 5px;
}
.hoverlink:hover + div,
.hoverlink + div:hover {
  display: flex;
}
.anaysisTitle,
.apiTitle {
  color: #1684f9;
  border: none;
  text-align: center;
}
.analysisDetailBox,
.apiDetailBox {
  display: none;
  justify-content: space-between;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background-color: #5908f0;
  position: absolute;
  top: 3.5em;
}

.hoverlink + div:before,
.hoverlink + div:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 100%;
  width: 0;
  height: 0;
}
.hoverlink + div:before {
  left: 15px;
  border: 12px solid transparent;
  border-bottom-color: #5908f0;
}
.hoverlink + div:after {
  left: 15px;
  border: 12px solid transparent;
  border-bottom-color: #5908f0;
}
.analysisDetailBox img,
.apiDetailBox img {
  width: 40%;
  border-radius: 10px 0 0 10px;
  padding: 0 10px;
}
.analysisText,
.apiText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  border-radius: 0 10px 10px 0;
  color: #fff;
  text-align: justify;
  padding: 0 20px;
  line-height: 20px;
  font-family: "Lexend Mega", sans-serif;
  font-family: "Roboto Mono", monospace;
}
.analysisText a,
.apiText a {
  color: #fff;
  font-weight: bold;
}
.analysisText a:hover,
.apiText a:hover {
  color: #ffccee;
}
.analysisText p,
.apiText p {
  font-size: 12px;
  font-weight: 550;
}
.registerBox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  order: 3;
  height: inherit;
}
.signUp {
  padding: 7px 12px;
  border: 1px solid #1684f9;
  border-radius: 6px;
  background: #1684f9;
  font-size: 15px;
  color: #fff;
  width: 100px;
  text-align: center;
  transition: 0.6s;
  outline: none;
}
.signUp:hover {
  background: #5908f0;
}

.logIn {
  padding: 7px 12px;
  border: 1px solid #1684f9;
  border-radius: 7px;
  background: transparent;
  font-size: 15px;
  color: #1684f9;
  width: 100px;
  text-align: center;
  transition: 0.6s;
  outline: none;
}
.logIn:hover {
  background: #1684f9;
  color: #fff;
}

@media screen and (max-width: 600px) {
  .hamburger {
    display: block;
  }
  .linkBox > .links {
    display: none;
  }
  .linkBox {
    flex-wrap: wrap;
  }
  .logoBox,
  .links,
  .registerBox {
    width: 100%;
  }
  .links {
    padding: 0;
  }
  .registerBox {
    display: none;
  }
  .links li {
    width: 100%;
    justify-content: flex-start;
    border-bottom: 1px solid #666;
  }
  .analysisDetailBox,
  .apiDetailBox {
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100%;
    background: #ffffff;
  }
  .analysisText,
  .apiText {
    color: #5908f0;
  }
  .analysisText a,
  .apiText a {
    color: #5908f0;
  }
}

/*--------------------------*/
.overlay {
  overflow: hidden;
  position: fixed;
  background: #1a237e;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  z-index: 99;
}
.overlay.open {
  overflow-y: scroll;
  opacity: 1;
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  -webkit-animation: fadeInRight 0.5s ease forwards;
  animation: fadeInRight 0.5s ease forwards;
  -webkit-animation-delay: 0.35s;
  animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.overlay nav {
  position: relative;
  padding-top: 20px;
  padding-bottom: 27px;
  height: 100%;
  font-weight: 400;
  text-align: center;
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
.overlay-menu .collapsible {
  background-color: #1a237e;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.overlay-menu .content {
  width: 100%;
  align-content: stretch;
  height: 152px;
  margin-top: 16px;
  display: none;
  overflow: hidden;
  background-color: #3d5afe;
}
.overlay-menu ul {
  list-style: none;
  list-style-image: none;
  margin: 0px;
  padding: 0px;
}
/* -------------------------------------------------- */

.accordion {
  width: 100%;
}
.accordion-collapse {
  background: #fff;
}

.accordion-collapse:target .accordion-collapse-content {
  height: 12rem;
}
.accordion-collapse:target > a::before {
  transform: translateY(-50%) rotate(-135deg);
}

.accordion-collapse > a {
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-align: left;
  text-transform: capitalize;
  padding: 2rem;
  position: relative;
}

.accordion-collapse > a::before {
  content: "";

  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  position: absolute;
  top: 50%;
  right: 2rem;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: transform 500ms ease-in-out;
}

.accordion-collapse.not-collapse > a::before {
  display: none;
}

.accordion-collapse > a {
  background: #1a237e;
}

.accordion-collapse-content {
  height: 0;
  overflow: hidden;
}

.register-box {
  padding: 40px;
  border-top: 1px solid rgba(61, 90, 254, 0.4);
  position: relative;
}
.register-box a {
  font: 15px "euclid_circular_bmedium", sans-serif;
  border-radius: 10px;
  color: #fff;
  padding: 15px 23px;
  text-align: center;
  display: inline-block;
  border: 1px solid #3d5afe;
  color: #fff;
  background-color: transparent;
  outline: none;
}
.register-box input:focus {
  background-color: #3d5afe;
}
@media screen and (min-width: 600px) {
  .overlay,
  .hamburger-bg {
    display: none;
  }
}
</style>
