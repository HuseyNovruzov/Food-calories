<template>
  <div class="selectedFoodWrap">
      <div class="foodBox">
        <h2>Calculate Calories</h2>
        <div class="selectedFoodsBox">
          <ul class="selectedFoods">
            <li v-for="(item, idx) in selectedItem" :key="idx">
            <a href="#" class="removeProduct" @click="removeProduct(idx)" title="remove from list"> - </a>
            <div class="foodDetails">
                <img :src="item.food.image" class="food-images" />
                <p class="title">{{ item.food.label }}</p>
            </div>
            
                <div class="container">
                  <div
                    ref="range__slider"
                    class="length range__slider"
                    data-min="0"
                    data-max="50"
                  >
                    <div class="length__title field-title">
                      <select
                        name="type_value"
                        class="type_value"
                        v-model="DataInputs[idx].type"
                        v-on:change="changed()"
                      >
                        <option value="number" selected>number</option>
                        <option value="gram">gram</option>
                      </select>
                      <input
                        v-model="DataInputs[idx].size"
                        v-on:change="changed()"
                        type="number"
                        min="0"
                        disabled
                      />
                    </div>
                    <input
                      v-model="DataInputs[idx].size"
                      v-on:change="changed()"
                      class="slider"
                      type="range"
                      min="0"
                      max="50"
                      value="0"
                    />
                  </div>
                </div>
              
            </li>
          </ul>
        </div>
    </div>
      <div class="chartBox">
        <h2>Properties</h2>
        <div class="buttonBox" v-if="!this.response">
          <input type="button" value="See result" @click="seeChanges()" />
        </div>
        <div v-if="this.response" class="chart">
          <display-calculation :kkal="kkal" :protein="protein" :fat="fat"></display-calculation>
        </div>
      </div>  
  </div>
</template>

<script>
import DisplayCalculation from './DisplayCalculation.vue';

export default {
  components: { DisplayCalculation },
  name: "CalorieList",
  props: ["selectedItem", "DataInputs"],

  data() {
    return {
      kkal: 0,
      protein: 0,
      fat: 0,
      response: false
    };
  },
  
  methods: {
    seeChanges() {
      let kkal = 0, protein = 0, fat = 0, quantity = 0, gram= 0, size = 0, type = '';
      let totalKkal = 0, totalProtein = 0, totalFat = 0;

      this.selectedItem.forEach((item,idx) => {
         kkal = item.food.nutrients.ENERC_KCAL;
         protein = item.food.nutrients.FIBTG;
         fat = item.food.nutrients.FAT;
         type = this.DataInputs[idx].type;
         size = this.DataInputs[idx].size;

         if(type === 'number'){
           quantity = item.food.servingsPerContainer;
           totalKkal += (size * parseFloat(kkal,10))/quantity;

           totalProtein += (size * parseFloat(protein,10))/quantity;
        
           totalFat += (size * parseFloat(fat,10))/quantity;
         }
         else if(type === 'gram'){
           gram = item.measures[0].weight;
           totalKkal += (size * parseFloat(kkal,10))/gram

           totalProtein += (size * parseFloat(protein,10))/gram
        
           totalFat += (size * parseFloat(fat,10))/gram;
         }

      });
      this.protein = totalProtein.toFixed(2);
      this.kkal = totalKkal.toFixed(2);
      this.fat = totalFat.toFixed(2);
      // console.log(this.protein, this.kkal, this.fat)
      if(isNaN(this.kkal) || isNaN(this.protein) || isNaN(this.fat)){
        alert("Ensure that you set value for all products")
      }else{
        if(!this.selectedItem.length){
          this.response = false
        }
        else{
          this.response = true
        }
      }
      
    },
    changed(){
      this.response = false;
    },
    removeProduct: function(index){
      this.selectedItem.splice(index,1)
      this.DataInputs.splice(index,1)
      this.response = false;
    }
  }
};
</script>

<style>

.selectedFoodWrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 620px;
  padding: 10px;
  border: 2px solid springgreen;
}

h2{
  /* border: 1px solid rebeccapurple; */
}
.selectedFoodsBox {
  border-radius: 5px;
  width: 250px;
  height: 450px;
  overflow-x: auto;
  box-shadow: -1px -1px 2px 0 rgba(0, 0, 0, 0.2),
               2px 2px 2px 0 rgba(0, 0, 0, 0.2), 
               3px 3px 2px 0 rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
}
.selectedFoods {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.selectedFoods li {
  display: flex;
  flex-direction: column;
  margin: 5px;
  /* border: 1px solid red; */
}
.selectedFoods li .removeProduct{
    color: rgb(245, 56, 56);
    text-decoration: none;
    /* border: 1px solid grey; */
    padding-left: 5px;
}
.selectedFoods li .foodDetails{
    /* border: 1px solid skyblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.selectedFoods li .food-images{
    /* border: 1px solid #66ccdd; */
}
.title {
  font-weight: bold;
}
.selectedFoods li .slider {
  width: 40%;
}
.number {
  width: 20%;
}



.container {
  margin: 10px 0;
  width: 100%;
  height: 130px;
  padding: 15px 15px;
  background: #0a0e31;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.45), 0 4px 8px rgba(0, 0, 0, 0.35),
    0 8px 12px rgba(0, 0, 0, 0.15);
  font-family: "Montserrat";
}
.field-title {
  position: absolute;
  top: -20px;
  left: 8px;
  transform: translateY(-50%);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-size: 0.65rem;
}
.type_value {
  background: #0a0e31;
  color: rgba(255, 255, 255, 0.5);
  width: 40%;
  outline: none;
  border: none;
}
.field-title input {
  float: left;
  width: 60%;
  background-color: transparent;
  color: white;
  border: none;
}
.field-title input:focus {
  outline: none;
}
.range__slider {
  position: relative;
  width: 100%;
  height: calc(65px - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  margin: 30px 0;
}
.range__slider::before,
.range__slider::after {
  position: absolute;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
}
.range__slider::before {
  content: attr(data-min);
  left: 10px;
}
.range__slider::after {
  content: attr(data-max);
  right: 10px;
}
.range__slider .length__title::after {
  content: attr(data-length);
  position: absolute;
  right: -16px;
  font-variant-numeric: tabular-nums;
  color: #fff;
}
.slider {
  -webkit-appearance: none;
  width: calc(100% - (70px));
  height: 2px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.314);
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}
.slider::-webkit-slider-thumb:hover {
  background: #d4d4d4;
  transform: scale(1.2);
}
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  /* transition: background 0.15s ease-in-out; */
}
.slider::-moz-range-thumb:hover {
  background: #d4d4d4;
}

.chartBox{
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  width: 320px;
}

.chart{
  /* border: 1px solid burlywood; */
  margin-top: 3em;
}
.buttonBox{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  border: 1px solid;
}
.buttonBox input[type=button]{
  border: 1px solid #1684f9;
  outline: none;
  padding: 7px 10px;
  background: transparent;
  color: #1684f9;
  font-weight: bold;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 7px;
}
.buttonBox input[type=button]:hover{
  background: #1684f9;
  border: none;
  color: #fff;
}


</style>