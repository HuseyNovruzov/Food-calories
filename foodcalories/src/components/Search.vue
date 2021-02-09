<template>
    <div class="header">
        <div class="logoBox">
            <div>Logo</div>
        </div>
        <div class="searchBox">
            <input type="text" class="search" placeholder="Search for food" v-model='query' @keypress.enter="handleSearch"/>
            <div class="searchIconBox">
                <img src="@/assets/search_24px.svg" @click="handleSearch"/>
            </div>
        </div>
        <div class="registerBox">
            <input type="button" value="Sign Up" class="signUp"/>
            <input type="button" value="Log In" class="logIn"/>
            
        </div>
    </div>
</template>

<script>
export default {
    name : 'Search',
    data() {
        return {
            query : ''
        }
    },
    methods : {
        handleSearch(){
            this.$emit('searchRequested', this.query);
            this.query = '';
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}

.header{
    padding: 10px;
    border-bottom: 1px solid #1684f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

}
.logoBox{
    /* border: 1px solid springgreen; */
    width: 310px;
    font-size: 25px;
}
.searchBox{
    border: 1px solid #1684f9; 
    display: flex;
    border-radius: 5px;
}

.registerBox{
    /* border: 1px solid rebeccapurple; */
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.searchBox .searchIconBox{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    border-radius: 0 5px 5px 0;
    position: relative;
}
.searchBox .searchIconBox:hover{
    background: #1684f9;
}
.search{
    width: 250px;
    height: 30px;   
    outline: none;
    border-radius: 5px;
    text-align: center;
    border: none;
}
.search::placeholder{
    color: rgba(0, 0, 0, 1);
    font-size: 17px;
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
}
.logIn:hover{
    background: #1684f9;
    color: #fff;
}

</style>