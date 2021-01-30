<template>
    <div class="foods-wrap">
        <h2>Foods</h2>
        <form class="optionBox">
            <label for="option">Choose method:</label>
                <select id="option">
                    <option name="option" value="number">Count</option>
                    <option name="option" value="gram">Gram</option>
                </select>
        </form>
            <div class="foods">
                <ul class="foods-list">
                    <li v-for='(food, index) in foods.hints' v-bind:key="index">
                        <img :src="food.food.image" class="food-images"/>
                        <p class="title">{{food.food.label}}</p>
                        <input type="button" value="Add to list" @click="addToCalorieList(index)"/>
                    </li>
                </ul>
            </div>
        
    </div>
</template>

<script>
export default {
    name: 'Foods',
    props: ['foods'],
    methods: {
        getSelectedValue(){
        let type = document.getElementById('option');
        return type.value;
      },
        addToCalorieList(index){
            let response = this.getSelectedValue();
            this.$emit('handleAdd', index,response);
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}
.foods-wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 650px;
    border: 1px solid;
    border: 1px solid slateblue;
}

.foods{
    border-radius: 5px;
    width: 100%;
    height: 450px;
    overflow-x: auto;
    box-shadow:  -1px  -1px 2px 0 rgba(0, 0, 0, 0.2), 
                 2px 2px 2px 0 rgba(0,0,0, 0.2),
                 3px 3px 2px 0 rgba(0,0,0,0.2);
    background: rgb(255, 255, 255);
}

.foods .foods-list{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 10px;
}
.foods-list li{ 
    width: 140px;
    text-align: center;
    padding: 5px;
    margin: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 15px; 
}

.foods-list input{
    background-image: linear-gradient(to right, #02aab0, #00cdac);
    border: none;
    border-radius: 15px;
    padding: 10px;
    color:aliceblue;
    font-weight: bold;
    box-shadow: 1px 3px 2px 0 rgb(235, 229, 229);
    outline: none;
}
.foods-list input:hover{
    cursor: pointer;
}
.food-images{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>