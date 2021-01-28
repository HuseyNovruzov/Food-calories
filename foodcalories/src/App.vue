<template>
  <div id="app">
    <div class="wrapper">
      <search v-on:searchRequested="handleSearch"></search>
      <div class="components-wrap">
        <foods :foods = foods v-on:handleAdd="addToCalorieList"></foods>
        <calorie-list :selectedItem="selectedItem"></calorie-list>
      </div>
    </div>
  </div>
</template>

<script>
import Foods from './components/Foods.vue'
import Search from  './components/Search.vue'
import CalorieList from './components/CalorieList.vue'
export default {
  name: 'app',
  components : { Foods, Search, CalorieList },
  data() {
        return {
            foods : [],
            selectedItem : [],
            api_id : 'e8b348ff',
            api_key : 'd09f21c1f0e3265da0718a274b4e6894'
        }
    },
    methods : {
      addToCalorieList(index){
        this.selectedItem.push(this.foods.hints[index]);
      },

      handleSearch(query){
        this.doQuery(query);
      },

      doQuery(query){
        fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=%20${query}&app_id=${this.api_id}&app_key=${this.api_key}`)
        .then((data) => { return data.json()})
        .then((data) => { return this.foods = data})
      }
    },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
.wrapper{
  display: flex;
  flex-direction: column;
}
.components-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
}
a {
  color: #42b983;
}
</style>
