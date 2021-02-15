<template>
    <div class="linkBox">
         <div class="logoBox">
            <div>Logo</div>
            <div class="nav-icon" >
                <input type="checkbox" />
                <span class="top sp"></span>
                <span class="bottom sp"></span>
            </div>
        </div>
       <ul class="links">
           <li>
               <details>
                    <summary class="anaysisTitle">Analysis</summary>
                    <div class="analysisDetailBox">
                        <img src="@/assets/chart.svg" />
                        <div class="analysisText">
                            <a href="#">Analysis</a>
                            <p>You can notice your weekly nutrition analysis by graph visualization.</p>
                        </div>
                    </div>
               </details>
            </li>
           <li>
               <details>
                    <summary class="apiTitle">Api</summary>
                    <div class="apiDetailBox">
                            <img src="@/assets/apiDocumentation.svg" />
                            <div class="apiText">
                                <a href="#">Documentation</a>
                                <p>You can notice your weekly nutrition 
                                    analysis by graph visualization.</p>
                            </div>
                    </div>
               </details>
           </li>
           <li><a href="">Feedback</a></li>
           <li><a href="">Contact</a></li>
       </ul>
       <div class="registerBox">
            <input type="button" value="Sign Up" class="signUp"/>
            <input type="button" value="Log In" class="logIn"/>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Roboto+Mono:wght@200&display=swap');

.linkBox{
    display: flex;
    align-items: center;
}
.logoBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    order: 1;
    height: inherit;
    width: 310px;
    color: #5908f0;
    font-size: 25px;
}
.nav-icon{
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: springgreen;
    height: 35px;
    width: 60px;
    padding: 10px;
    border-radius: 20px 8px 7px 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}
.nav-icon input[type=checkbox]{
    position: absolute;
    top: 6px;
    width: 25px;
    height: 20px;
    padding: 10px;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
}
.nav-icon span {
    height: 2px;
    width: 30px;
    background:#1684f9;
    opacity: 1;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.nav-icon input[type=checkbox]:checked ~ .top{
    position: relative; 
    left: 0; top: 7px; 
    transform: rotate(45deg);
}
.nav-icon input[type=checkbox]:checked ~ .bottom{
    position: relative; 
    left: 0; top: -6px; 
    transform: rotate(-45deg);
}
.nav-icon input[type=checkbox]:checked ~ .links{
    display: flex;
}

.links{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    order: 2;
    width: 660px;
    list-style-type: none;
    height: inherit;
}
.links li{
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    width: 100px;
    font-size: 18px;
    padding: 5px;
}
.anaysisTitle, .apiTitle{
    color: #1684f9;
    border: none;
}
.analysisDetailBox, .apiDetailBox{
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 200px;
    border-radius: 10px;
    background-color: #5908f0;
    position: absolute;
    top: 3.5em;
}
.analysisDetailBox img, .apiDetailBox img{
    width: 40%;
    border-radius: 10px 0 0 10px;
    padding: 0 10px;
}
.analysisText, .apiText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    border-radius: 0 10px 10px 0;
    color: #fff;
    text-align: justify;
    padding: 0 20px;
    line-height: 20px;
    font-family: 'Lexend Mega', sans-serif;
    font-family: 'Roboto Mono', monospace;
}
.analysisText a, .apiText a{
    color: #fff;
    font-weight: bold;
}
.analysisText a:hover, .apiText a:hover{
    color: #ffccee;
}
.analysisText p, .apiText p{
    font-size: 12px;
    font-weight: 550;
}
.registerBox{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    order: 3;
    height: inherit;
}
.signUp{
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
.signUp:hover{
    background: #5908f0 ;
}

.logIn{
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
.logIn:hover{
    background: #1684f9;
    color: #fff;
}

@media screen and (max-width: 600px){
    .nav-icon{
        display: flex;
    }
    .linkBox{
        flex-wrap: wrap;
    }
    .logoBox, .links, .registerBox{
        width: 100%;
    }
    .links{
        padding: 0;
    }
    .registerBox{
        display: none;
    }
    .links li{
        width: 100%;
        justify-content: flex-start;
        border-bottom: 1px solid #666;
    }
    .analysisDetailBox, .apiDetailBox{
        position: relative;
        top: 0;
        left: 0;
        border-radius: 0;
        width: 100%;
        background: #ffffff;
    }
    .analysisText, .apiText{
        color: #5908f0;
    }
    .analysisText a, .apiText a{
        color: #5908f0;
    }
}

</style>