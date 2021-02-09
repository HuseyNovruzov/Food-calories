<template>
  <div id="app">
    <div class="wrapper">
      <search v-on:searchRequested="handleSearch"></search>
      <div class="components-wrap">
        <foods :foods="foods" v-on:handleAdd="addToCalorieList"></foods>
        <calorie-list :selectedItem="selectedItem" :DataInputs="DataInputs"></calorie-list>        
      </div>
    </div>
  </div>
</template>

<script>
import Foods from "./components/Foods.vue";
import Search from "./components/Search.vue";
import CalorieList from "./components/CalorieList.vue";
import DisplayCalculation from "./components/DisplayCalculation.vue";
export default {
  name: "app",
  components: { Foods, Search, CalorieList, DisplayCalculation },
  data() {
    return {
      foods: [],
      selectedItem: [],
      DataInputs: [],
      api_id: "e8b348ff",
      api_key: "d09f21c1f0e3265da0718a274b4e6894",
    };
  },
  methods: {
    addToCalorieList(index) {
      if(this.selectedItem.some(item => item.food.label === this.foods.hints[index].food.label)){
        alert('you add this item')
      }else{
        this.selectedItem.push(this.foods.hints[index]);
        this.DataInputs.push({ type: 'number', size: 0 });
      }
    },
    handleSearch(query) {
      this.doQuery(query);
    },
    doQuery(query) {
      fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=%20${query}&app_id=${this.api_id}&app_key=${this.api_key}`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          return (this.foods = data);
        });
    },
  },
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.components-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}

a {
  color: #42b983;
}
</style>