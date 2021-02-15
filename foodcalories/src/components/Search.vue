<template>
    <div class="header">
        <div class="searchBox">
            <input type="text" class="search" placeholder="Search for food" v-model='query' @keypress.enter="handleSearch"/>
            <div class="searchIconBox">
                <img src="@/assets/search_24px.svg"/>
            </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #1684f9;
    flex-wrap: wrap;
}

.searchBox{
    display: flex;
    border: 1px solid #1684f9; 
    border-radius: 5px;
}


.searchBox .searchIconBox{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    border-radius: 0 5px 5px 0;
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



</style>