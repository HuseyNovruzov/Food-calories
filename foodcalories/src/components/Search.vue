<template>
    <div class="searchBar">
        <input type="text" placeholder="Search for food" v-model='query' class="search" @keypress.enter="handleSearch"/>
    </div>
</template>

<script>
export default {
    name : 'Search',
    data() {
        return {
            query : ' '
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
.searchBar{
    padding: 10px;
}
.search{
    width: 300px;
    border-radius: 5px;
    height: 30px;   
    padding: 5px;
    border: 1px solid #42b983;
    outline: none;
}
.search::placeholder{
    color: rgba(0, 0, 0, 1);
    font-size: 17px;
}

</style>